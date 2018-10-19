import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ServiceService } from '../../allservice/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleFilterPipe } from '../filter.pipe-article';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css'] 
})
export class DisplayAllComponent implements OnInit, OnChanges {

  displayArticles: any;
  @Input() filterBy?: string = 'all' // Pipe selection for Title of article

  constructor(
    private myService:ServiceService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {    
 // Display All Articles to the main Display Card 
    this.myService.getAllArticles().subscribe(displayAll => {
      this.displayArticles = displayAll;       
    },
    err => {
      console.log(err);
      return false;
    });
  }

  
  ngOnChanges(){ }

  // Delete garnwa khojeko vayo balla balla database batwa tara utwa front screen batwa hatena 
  onSelectTitle(article_id){
    this.myService.removeSingleArticle(article_id).subscribe( result => {
      console.log(result);
    },
      err => {
        console.log(err);
        return false;
      });   
  }

}
