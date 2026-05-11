import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';
import { LoaderService } from '../../composants/loader/loader/service/loader.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //this.loaderService.show(); // ✅ désactivé temporairement

    // URLs publiques — pas de token
    const publicUrls = ['/entreprises/create', '/utilisateurs/create', '/auth/authenticate'];
    const isPublic = publicUrls.some((url) => req.url.includes(url));

    if (!isPublic) {
      const accessTokenJson = localStorage.getItem('accessToken');
      if (accessTokenJson) {
        const accessToken = JSON.parse(accessTokenJson);
        const authReq = req.clone({
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + accessToken.accessToken,
          }),
        });
        return this.handleRequest(authReq, next);
      }
    }

    return this.handleRequest(req, next);
  }
  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      /*tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hide(); // ✅ succès
          }
        },
        (err: any) => {
          this.loaderService.hide(); // ✅ erreur
        },
      ),*/
      finalize(() => {
        this.loaderService.hide(); // ✅ toujours appelé à la fin ✅ suffit seul
      }),
    );
  }
}
