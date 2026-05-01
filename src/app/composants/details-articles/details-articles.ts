import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-articles',
  standalone: false,
  templateUrl: './details-articles.html',
  styleUrl: './details-articles.css',
})

export class DetailsArticles implements OnInit {

  //@Input()
  //articleDto: ArticleDto = {};
  //@Output()
  //suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    //private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

  /*modifierArticle(): void {
    this.router.navigate(['nouvelarticle', this.articleDto.id]);
  }

  confirmerEtSupprimerArticle(): void {
    if (this.articleDto.id) {
      this.articleService.deleteArticle(this.articleDto.id)
        .subscribe(res => {
          this.suppressionResult.emit('success');
        }, error => {
          this.suppressionResult.emit(error.error.error);
        });
    }
  }*/
}
