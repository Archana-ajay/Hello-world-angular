import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  post={
    title:"Title",
    isFavorite:true
  }
  tweet={
    body:'...',
    likesCount:10,
    isLiked:true
  }
  //courses=[1,2]
  courses:any;
  viewMode="map";
  onFavoriteChanged(isFavorite:FavoriteChangedEventArgs){
    console.log("favorite changed",isFavorite);
  
    
  }
  onAdd(){
    this.courses.push({id:4,name:"course4"})
  }
  onRemove(course: any){
    const index=this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  loadCourses(){
    this.courses=[
      {id:1,name:"course1"},
      {id:2,name:"course2"},
      {id:3,name:"course3"}
  
    ]
  }
  trackCourse(index:any,course:any){
    return course?course.id:undefined;
  }
  canSave=false;
  task={
    title:'Review applications',
    assignee:{
      name:null
    }
  }

}
