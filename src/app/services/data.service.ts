import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import 'rsjx/add/operator/catch';

 
import { Inject } from '@angular/core';
import { AppError } from '../common/app-error'

import { BadInput } from '../common/bad-input';

import { NotFoundError } from '../common/not-found-error';

import { Observable } from 'rxjs';

import { catchError } from "rxjs/operators";

import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/observable/throw'

 

@Injectable({

  providedIn: 'root'

})

export class DataService {


    constructor(@Inject(String) private url: string, private http: HttpClient) { }

 

  getAll(): Observable<any> {

    return this.http.get(this.url).pipe(
        map(response=>response),
      catchError(this.handleError));

  }

  create(resource: any): Observable<any> {


    return this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(response=>response),
      catchError(this.handleError));

 

  }

  update(resource: any) {

    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))

      .pipe( map(response=>response),catchError(this.handleError));

  }

  delete(id: number) {

    return this.http.delete(this.url + '/' + id).pipe(

        map(response=>response),
        catchError(this.handleError)

    );

  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 400) {

      return throwError(new BadInput(error.error()));

    }

    if (error.status === 404) {

      return throwError(new NotFoundError());

    }

    return throwError(new AppError(error.error));

 

  }

}