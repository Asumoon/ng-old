import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../allservice/service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-single-tech-out',
  templateUrl: './single-tech.component.html',
  styleUrls: ['../technology.component.css']

})
export class SingleTechOut implements OnInit {

  technologyArticle: any;
  unsub;

  // Adding to Dependency Injection
  constructor(
    private myService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.unsub = this.route.params.subscribe((params) => {
      let url = params['url'];
      // Displays Url
      console.log(url + ' this is url'); 
      // Getting post url from html page and passing it to the url and using url as a parameter to getSingle
      this.myService.getSingle(url).subscribe(technologyArt => {
        this.technologyArticle = technologyArt;
        // displays all selected article object 
       // console.log(technologyArt);
      },
        err => {
          console.log(err);
          return false;
        });
    });

  }
  // ngOnDestroy(){
  //   this.unsub.unsubscribe();
  // }

}
