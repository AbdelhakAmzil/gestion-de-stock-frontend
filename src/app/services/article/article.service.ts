import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ArticlesService } from '../../../gs-api/src/services/articles.service';
import { ArticleDto } from '../../../gs-api/src/models/article-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private userService: UserService,
    private articleService: ArticlesService,
  ) {}

  enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto> {
    //articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    const accessTokenJson = localStorage.getItem('accessToken');
    if (accessTokenJson) {
      const accessToken = JSON.parse(accessTokenJson);
      // Décoder le token JWT pour extraire idEntreprise
      const payload = JSON.parse(atob(accessToken.accessToken.split('.')[1]));
      articleDto.idEntreprise = Number(payload.idEntreprise); // ✅ convertir en number
    }
    return this.articleService.save(articleDto);
  }

  findAllArticles(): Observable<ArticleDto[]> {
    return this.articleService.findAll();
  }

  findArticleById(idArticle?: number): Observable<ArticleDto> {
    if (idArticle) {
      return this.articleService.findById(idArticle);
    }
    return of();
  }

  deleteArticle(idArticle: number): Observable<any> {
    if (idArticle) {
      return this.articleService.delete(idArticle);
    }
    return of();
  }

  findArticleByCode(codeArticle: string): Observable<ArticleDto> {
    return this.articleService.findByCodeArticle(codeArticle);
  }
}
