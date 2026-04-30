import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [App, PageLogin, PageInscription],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
