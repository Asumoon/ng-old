import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifeHackComponent } from './public/life-hack/life-hack.component';
import { LatestNewsTabComponent } from './public/common/latest-news-tab/latest-news-tab.component';
import { TechnologyComponent } from './public/technology/technology.component';
import { HistoryComponent } from './public/history/history.component';
import { TipsAnTricksComponent } from './public/tips-an-tricks/tips-an-tricks.component';
import { AllMoreComponent } from './public/all-more/all-more.component';
import { SingleTechOut } from './public/technology/single-tech-out/single-tech-out.component';

import { NewArticleComponent } from './dasminal/new-article/new-article.component';
import { DisplayAllComponent } from './dasminal/display-all/display-all.component';
import { ParkLoginComponent } from './dasminal/park-login/park-login.component';

const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'technology',
        children: [
            { path: '', component: TechnologyComponent },
            { path: ':url', component: SingleTechOut },
        ]
    },
    {
        path: 'computer',
        children: [
            { path: '', component: HomeComponent },
            // { path: ':id', component: SingleTechOut },
        ]
    },
    {
        path: 'hostory',
        children: [
            { path: '', component: HistoryComponent },
            // { path: ':id', component: SingleTechOut },
        ]
    },
    {
        path: 'life-hack',
        children: [
            { path: '', component: LifeHackComponent },
          //  { path: ':id', component: SingleTechOut },
        ]
    },
    {
        path: 't-and-t',
        children: [
            { path: '', component: TipsAnTricksComponent },
          //  { path: ':id', component: SingleTechOut },
        ]
    },
    {
        path: 'more',
        children: [
            { path: '', component: AllMoreComponent },
          //  { path: ':id', component: SingleTechOut },
        ]
    },
    { path: 'side', component: LatestNewsTabComponent },
    { path: 'new', component: NewArticleComponent },
    { path: 'display', component: DisplayAllComponent },
    { path: 'login', component: ParkLoginComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(router)
    ],
    exports: [RouterModule]
})

export class AppRouterAll { }
export const navRouteComponents = [
    HomeComponent, TechnologyComponent, HistoryComponent, LifeHackComponent, TipsAnTricksComponent, AllMoreComponent,
    SingleTechOut,
    NewArticleComponent, DisplayAllComponent, ParkLoginComponent
]