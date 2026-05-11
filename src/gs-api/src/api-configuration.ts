/* tslint:disable */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  // ❌ AVANT
  // rootUrl: string = 'http://localhost:8081';

  // ✅ APRÈS — chemin relatif, passe par le proxy
  rootUrl: string = 'http://localhost:8081';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
