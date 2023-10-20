import { NotFoundError } from './../common/not-found-error';
import {BadInput} from './../common/bad-input'
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';

// import { NotFoundError } from 'rxjs';

 

 

 

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

 

export class PostsComponent implements OnInit {
  posts: any;
  // constructor(private http: HttpClient) {
  // }
  constructor(private service:PostService) {

  }

 
  ngOnInit(){
    this.service.getAll()
    .subscribe(posts => 

      this.posts = posts

    );

  }

 

  createPost(input: HTMLInputElement) {

    const post: any = { title: input.value }
    this.posts.splice(0, 0, post)
    input.value = '';

    this.service.create(post)

    .subscribe(

      (newPost:any)=>{

      post.id = newPost.id
    },

    (error:AppError)=>{
      this.posts.splice(0,1)
      
          if (error instanceof BadInput){
          //this.form.setErrors(error.orginalError);
          alert('not found')
           

        }

        else throw error;

    });

  }

 

  updatePost(post: any) {

    this.service.update(post)

    .subscribe(updatedPost=> {

      console.log(updatedPost);

    })

 

    // this.http.put(this.url,JSON.stringify(post))

 

  }

 

  deletePost(post: any) {

    this.service.delete(345)

    .subscribe(

      () => {

      const index = this.posts.indexOf(post)

      this.posts.splice(index, 1)

    },

    (error:AppError) =>{

      if (error instanceof NotFoundError)

        alert ('This post has already been deleted')

      else throw error;

       

    });

 

  }

 

}



