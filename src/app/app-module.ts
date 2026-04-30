import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { RouterModule } from '@angular/router';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { Menu } from './composants/menu/menu';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App, PageLogin, PageInscription, PageDashboard, PageStatistiques, Menu],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
