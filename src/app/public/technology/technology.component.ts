import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../allservice/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

// initial declaration
  technologyArticles:any;
  
// Adding to Dependency Injection
  constructor(
    private myService:ServiceService,
    private router:Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // This is for Feteching Only technology Article to the main Display Card 
    this.myService.getAllTechnology().subscribe(technologyArt => {
      this.technologyArticles = technologyArt     
    },
    err => {
      console.log(err);
      return false;
    });  
  }

  // Giving Single Route for the Single Article clicking format not url  
      onSelectTitle(sTechnologyArticles){
        this.router.navigate(['/technology', sTechnologyArticles.mainArticle.postURL]);
      }

}
