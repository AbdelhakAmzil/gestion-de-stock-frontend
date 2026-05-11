import { Component, OnInit } from '@angular/core';
import { MvtstkService } from '../../../../gs-api/src/services/mvtstk.service';
import { ArticleService } from '../../../services/article/article.service';
import { ArticleDto } from '../../../../gs-api/src/models/article-dto';
import { MvtStkDto } from '../../../../gs-api/src/models/mvt-stk-dto';

@Component({
  selector: 'app-page-mvtstk',
  standalone: false,
  templateUrl: './page-mvtstk.html',
  styleUrls: ['./page-mvtstk.css'],
})
export class PageMvtstk implements OnInit {
  listArticles: Array<ArticleDto> = [];
  mvtStkParArticle: Map<number, MvtStkDto[]> = new Map();
  stockParArticle: Map<number, number> = new Map();

  constructor(
    private articleService: ArticleService,
    private mvtStkService: MvtstkService,
  ) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.findAllArticles().subscribe((articles: ArticleDto[]) => {
      this.listArticles = articles;
      articles.forEach((article: ArticleDto) => {
        if (article.id) {
          this.loadMvtStk(article.id);
        }
      });
    });
  }

  loadMvtStk(idArticle: number): void {
    this.mvtStkService.mvtStkArticle(idArticle).subscribe((mvts: MvtStkDto[]) => {
      this.mvtStkParArticle.set(idArticle, mvts);
      const stock = mvts.reduce((total: number, mvt: MvtStkDto) => {
        if (mvt.typeMvt === 'ENTREE') return total + (mvt.quantite || 0);
        if (mvt.typeMvt === 'SORTIE') return total - (mvt.quantite || 0);
        return total;
      }, 0);
      this.stockParArticle.set(idArticle, stock);
    });
  }

  getMvts(idArticle: number): MvtStkDto[] {
    return this.mvtStkParArticle.get(idArticle) || [];
  }

  getStock(idArticle: number): number {
    return this.stockParArticle.get(idArticle) || 0;
  }
}
