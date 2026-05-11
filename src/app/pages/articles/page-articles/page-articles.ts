import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArticleDto } from '../../../../gs-api/src/models/article-dto';
import { ArticleService } from '../../../services/article/article.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-articles',
  standalone: false,
  templateUrl: './page-articles.html',
  styleUrls: ['./page-articles.css'],
})
export class PageArticles implements OnInit {
  @Input()
  listArticle: Array<ArticleDto> = [];
  listArticleFiltree: Array<ArticleDto> = []; // ✅ liste filtrée
  errorMsg = '';
  private routerSub?: Subscription;

  constructor(
    private router: Router,
    //private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    // ✅ délai pour laisser MDC s'initialiser
    setTimeout(() => this.findListArticle(), 500);

    // ✅ recharger à chaque retour sur cette page
    this.routerSub = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        filter((event: any) => event.urlAfterRedirects.includes('articles')),
      )
      .subscribe(() => {
        this.findListArticle();
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  findListArticle(): void {
    this.articleService.findAllArticles().subscribe(
      (articles) => {
        this.listArticle = articles;
        this.listArticleFiltree = articles; // ✅ initialiser
      },
      (error) => {
        this.errorMsg = error.error?.message || 'Erreur lors du chargement';
      },
    );
  }

  rechercherArticle(event: any): void {
    const terme = event.target.value.toLowerCase();
    if (!terme) {
      this.listArticleFiltree = this.listArticle;
    } else {
      this.listArticleFiltree = this.listArticle.filter(
        (article) =>
          article.designation?.toLowerCase().includes(terme) ||
          article.codeArticle?.toLowerCase().includes(terme) ||
          article.category?.designation?.toLowerCase().includes(terme),
      );
    }
  }

  nouvelArticle(): void {
    this.router.navigate(['dashboard', 'nouvelarticle']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findListArticle();
    } else {
      this.errorMsg = event;
    }
  }
}
