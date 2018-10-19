import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../allservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tips-an-tricks',
  templateUrl: './tips-an-tricks.component.html',
  styleUrls: ['./tips-an-tricks.component.css']
})
export class TipsAnTricksComponent implements OnInit {

  tandtArticles:any;
  
  // Adding to Dependency Injection
  constructor(
    private myService:ServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.myService.getAllTandT().subscribe(tandtArt => {
      this.tandtArticles = tandtArt;
    },
    err => {
      console.log(err);
      return false;
    });
    
  }

}
