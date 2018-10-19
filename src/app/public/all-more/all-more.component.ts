import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../allservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-more',
  templateUrl: './all-more.component.html',
  styleUrls: ['./all-more.component.css']
})
export class AllMoreComponent implements OnInit {

  moreArticles:any;
  
  // Adding to Dependency Injection
  constructor(
    private myService:ServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    // Getting all More Articles 
    this.myService.getAllMore().subscribe(moreArt => {
      this.moreArticles = moreArt;      
    },
    err => {
      console.log(err);
      return false;
    });

  }

}
