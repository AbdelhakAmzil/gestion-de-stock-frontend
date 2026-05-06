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
import { Header } from './composants/header/header';
import { PageArticles } from './pages/articles/page-articles/page-articles';
import { DetailsArticles } from './composants/details-articles/details-articles';
import { Loader } from './composants/loader/loader/loader';
import { BouttonAction } from './composants/boutton-action/boutton-action';
import { DetailCltFrs } from './composants/detail-clt-frs/detail-clt-frs';
import { DetailCmdCltFrs } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs';
import { DetailCmd } from './composants/detail-cmd/detail-cmd';
import { DetailMvtStkArticle } from './composants/detail-mvt-stk-article/detail-mvt-stk-article';
import { DetailMvtStk } from './composants/detail-mvt-stk/detail-mvt-stk';
import { DetailUtilisateur } from './composants/detail-utilisateur/detail-utilisateur';
import { NouveauCltFrs } from './composants/nouveau-clt-frs/nouveau-clt-frs';
import { FormsModule } from '@angular/forms';
import { NouveauCmdCltFrs } from './composants/nouveau-cmd-clt-frs/nouveau-cmd-clt-frs';
import { Pagination } from './composants/pagination/pagination';

@NgModule({
  declarations: [
    App,
    PageLogin,
    PageInscription,
    PageDashboard,
    PageStatistiques,
    Menu,
    Header,
    PageArticles,
    Loader,
    NouveauCmdCltFrs,
    Pagination,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    DetailsArticles,
    BouttonAction,
    DetailCltFrs,
    DetailCmdCltFrs,
    DetailCmd,
    DetailMvtStkArticle,
    DetailMvtStk,
    DetailUtilisateur,
    NouveauCltFrs,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
