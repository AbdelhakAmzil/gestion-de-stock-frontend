import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoaderState } from '../loader.model';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private requestCount = 0;
  private loaderSubject = new BehaviorSubject<LoaderState>({ show: false });
  loaderState = this.loaderSubject.asObservable();

  show(): void {
    this.requestCount++;
    this.loaderSubject.next({ show: true });
  }

  hide(): void {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.loaderSubject.next({ show: false });
    }
  }
}
