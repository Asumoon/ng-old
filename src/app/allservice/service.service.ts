import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {

  visibleImages = [];
  user: any;
  IMAGES: any[];

  obj = {
    id: "1",
    name: "Entertainment"
  }

  constructor(private http: Http) { }

  // Register new All-Category of Article 
  addNewArticle(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:2222/art/post', user, { headers: headers })
      .map(res => res.json());
  }

  // get single article 
  getSingle(url) {
    let headers = new Headers();
    let singleURL ='http://localhost:2222/art/one/';
    headers.append('Content-Type', 'application/json');
    return this.http.get(singleURL + url, { headers: headers })
      .map(res => res.json());
  }

  // Getting Only Category of Technology 
  getAllTechnology() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:2222/art/techno', { headers: headers })
      .map(res => res.json());
  }

  // Getting only Category of History 
  getAllHistory() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:2222/art/histo', { headers: headers })
      .map(res => res.json());
  }

  // Getting only Category of Life-Hack 
  getAllLifeHack() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:2222/art/life-hack', { headers: headers })
      .map(res => res.json());
  }
 
  // Getting only Category of Tips-and-Tricks 
  getAllTandT() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:2222/art/tips-&-tricks', { headers: headers })
      .map(res => res.json());
  }
  
  // Getting only Category of More 
  getAllMore() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:2222/art/more', { headers: headers })
      .map(res => res.json());
  }

  // Getting all articles with Latest at top
  getAllArticles() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:2222/art/all-article', { headers: headers })
      .map(res => res.json());
  }

  // delete the article by using articleId
  removeSingleArticle(id) {
    let headers = new Headers();
    let url = 'http://localhost:2222/art/delete/';
    headers.append('Content-Type', 'application/json');
    return this.http.delete(url + id, { headers: headers })
      .map(res => res.json());
  }


  // Update the article information
  updateArticle(id) {
    let headers = new Headers();
    let url = 'http://localhost:2222/art/update/';
    headers.append('Content-Type', 'application/json');
    return this.http.put(url +"/"+ id, { headers: headers})
    .map(res => res.json());
  }

  success() {
    return "hello service";
  }
}
