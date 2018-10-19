import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../allservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life-hack',
  templateUrl: './life-hack.component.html',
  styleUrls: ['./life-hack.component.css']
})
export class LifeHackComponent implements OnInit {

  lifeHackArticles: any;

  // Adding to Dependency Injection
  constructor(
    private myService:ServiceService,
    private router:Router
  ) { }

  ngOnInit() {

    this.myService.getAllLifeHack().subscribe(lifeHackArt => {
      this.lifeHackArticles = lifeHackArt;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
