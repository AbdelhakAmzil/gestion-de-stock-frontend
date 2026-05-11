import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from '../../../../gs-api/src/models/article-dto';
import { ArticleService } from '../../../services/article/article.service';

@Component({
  selector: 'app-page-articles',
  standalone: false,
  templateUrl: './page-articles.html',
  styleUrls: ['./page-articles.css'],
})
export class PageArticles implements OnInit {
  @Input()
  listArticle: Array<ArticleDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    this.findListArticle();
  }

  findListArticle(): void {
    this.articleService.findAllArticles().subscribe((articles) => {
      this.listArticle = articles;
    });
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
