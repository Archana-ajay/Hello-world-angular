import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import 'rsjx/add/operator/catch';

 
import { DataService } from './data.service';

// import 'rxjs/add/observable/throw'

 

@Injectable({

  providedIn: 'root'

})

export class PostService extends DataService{

  //private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts',http);
  }

 
}