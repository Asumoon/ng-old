import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../allservice/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

    artId: String;
    author: String;
    category: String;
    mainTitle: String;
    mainBody: String;
    postURL: String;
    published: String;
    date: String;
    tagOne: String;
    tagTwo: String;
    tagThree: String;
    tagFour: String;
  
  constructor(
    private myService:ServiceService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }

  artSubmit(){
    const myArticle ={
      artId: this.artId,
      category: this.category,
      author: this.author,
      mainArticle:{
        mainTitle: this.mainTitle,
        mainBody: this.mainBody,
        postURL: this.postURL,
        published: this.published,
        date: this.date,
        tags:{
          tagOne: this.tagOne,
          tagTwo: this.tagTwo,
          tagThree: this.tagThree,
          tagFour: this.tagFour,
        }
      }
   }
    console.log("New Article is registered You can view according to your Category Part");

    // Register Article 
    this.myService.addNewArticle(myArticle).subscribe(data =>{
      if(data.success){
         this.router.navigate(['./home']);        
      }      else{
         this.router.navigate(['./new']);
      }
    });
  };

}
