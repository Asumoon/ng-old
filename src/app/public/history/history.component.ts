import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../allservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  allHistoryArticle: any;

// Adding to Dependency Injection
  constructor(
    private myService:ServiceService,
    private router:Router
  ) { }

  ngOnInit() {

    this.myService.getAllHistory().subscribe(allHistoryArt => {
      this.allHistoryArticle = allHistoryArt;
    },
    err => {
      console.log(err);
      return false;
    });

}
}
