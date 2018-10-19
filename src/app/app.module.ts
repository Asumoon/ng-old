import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouterAll } from "./app.nav-route";
import { AppPubModule } from './public/app.pub-module';
import { AppDasModule } from './dasminal/app.das-module';
import { navRouteComponents } from "./app.nav-route";

import { ServiceService } from './allservice/service.service';
 import { ArticleFilterPipe } from './dasminal/filter.pipe-article';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { LatestNewsTabComponent } from './public/common/latest-news-tab/latest-news-tab.component';
import { TabCommonLatest } from './public/common/tab-latest/tab-common-latest.component';


@NgModule({
  declarations: [
    AppComponent, navRouteComponents,
     HeaderComponent,FooterComponent,TabCommonLatest, LatestNewsTabComponent, ArticleFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule, HttpModule,AppPubModule, AppDasModule, AppRouterAll,
  ],
  providers: [ServiceService, ArticleFilterPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
