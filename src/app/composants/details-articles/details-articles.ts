import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleDto } from '../../../gs-api/src/models/article-dto';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-details-articles',
  standalone: false,
  templateUrl: './details-articles.html',
  styleUrls: ['./details-articles.css'],
})
export class DetailsArticles implements OnInit {
  @Input()
  articleDto: ArticleDto = {};
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void {}

  modifierArticle(): void {
    this.router.navigate(['dashboard', 'nouvelarticle', this.articleDto.id]);
  }

  confirmerEtSupprimerArticle(): void {
    if (this.articleDto.id) {
      this.articleService.deleteArticle(this.articleDto.id).subscribe(
        (res) => {
          this.suppressionResult.emit('success');
        },
        (error) => {
          this.suppressionResult.emit(error.error.error);
        },
      );
    }
  }

  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
