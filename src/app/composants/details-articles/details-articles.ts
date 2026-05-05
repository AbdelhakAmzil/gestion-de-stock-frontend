import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { ArticleDto } from '../../../gs-api/src/models/article-dto';
//import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-details-articles',
  standalone: false,
  templateUrl: './details-articles.html',
  styleUrls: ['./details-articles.css'],
})
export class DetailsArticles implements OnInit {

  //@Input() articleDto: ArticleDto = {};
  @Output() suppressionResult = new EventEmitter<string>();

  showModal = false;

  constructor(
    private router: Router,
    //private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  onImgError(event: any): void {
    event.target.src = 'assets/product.png';
  }

  modifierArticle(): void {
    //this.router.navigate(['nouvelarticle', this.articleDto.id]);
  }

  confirmerEtSupprimerArticle(): void {
    /*if (!this.articleDto.id) return;

    this.articleService.deleteArticle(this.articleDto.id).subscribe({
      next: () => {
        this.showModal = false;
        this.suppressionResult.emit('success');
      },
      error: (err) => {
        this.showModal = false;
        this.suppressionResult.emit(err?.error?.error ?? 'Erreur inconnue');
      }
    });*/
  }
}
