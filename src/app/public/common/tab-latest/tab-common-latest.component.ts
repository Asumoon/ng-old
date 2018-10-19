import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../allservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-common-latest',
  templateUrl: './tab-common.component.html',
  styleUrls: ['../latest-news-tab/latest-news-tab.component.css']
  
})
export class TabCommonLatest implements OnInit {

  technologyArticle:any;

  // Adding to Dependency Injection
  constructor(
    private myService:ServiceService,
    private router:Router
  ) { }

  ngOnInit() {

  // This code is for the getting all Latest News Article to single Tab Part 
    this.myService.getAllArticles().subscribe(technologyArt => {
      this.technologyArticle = technologyArt;       
    },
    err => {
      console.log(err);
      return false;
    });

  }

}
