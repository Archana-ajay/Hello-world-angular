import { CoursesServices } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector:'courses',
    template:`
    <h2>{{title}}</h2>
    <button [style.backgroundColor]="isActive?'blue':'white'"class="btn btn-primary" [class.active]="isActive">Save</button>
    <br>
    <br>
    <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
    </div>
    <br>
    <input  (keyup.enter)="onKeyUp()">
    <input [(ngModel)]="email" (keyup.enter)="valueEntered()"/>
    <br>
    <img src="{{imageUrl}}"/>
    <img [src]="imageUrl"/>
    <table>
    <tr>
    <td [attr.colspan]="colSpan"></td>
    </tr>
    </table>
    <ul>
    <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    {{course.title |uppercase | lowercase}}<br>
    {{course.rating | number:"1.2-2"}}<br>
    {{course.students | number}}<br>
    {{course.price | currency:"IND":true:'3.2-2'}}<br>
    {{course.releaseDate | date:"shortDate"}} <br>
    {{text |summary:20}}
    `

})
export class CoursesComponent{
    course={
        title:"The complete Angular Course",
        rating:4.57686,
        students:354627,
        price:860,
        releaseDate:new Date(2016,3,1)
    };
    text="hi hello this is angular tutorial.The course name is The complete angular tutorial. Duration of the course is 29 hrs"
    title="List of courses";
    colSpan=2;
    isActive=true;
    email="applexus@gmail.com"
    imageUrl="https://www.bing.com/images/search?view=detailV2&ccid=yd7x1Zm6&id=3BB91C8044AC2ABC8BA075F5E8A76D0825079FEB&thid=OIP.yd7x1Zm6KJ3T1tXTWLX9FAHaEc&mediaurl=https%3a%2f%2fmedia.designrush.com%2fagency_photos_and_videos%2f18645%2fconversions%2fAPPLEXUS-TRV-001-thumb.jpg&exph=480&expw=800&q=applexus+technologies&simid=608039439798393472&FORM=IRPRST&ck=630A7BD44D2051E3344CBE566DA6DDEC&selectedIndex=2"
    courses;
    onDivClicked(){
        console.log("div was clicked");
    }
    valueEntered(){
        console.log(this.email);
        
    }
    onSave($event: any){
        $event.stopPropagation();
        console.log("Button was clicked",$event);
    }
    onKeyUp(){
        console.log("ENTER was pressed");
        
    }
constructor(service:CoursesServices){
    
    this.courses=service.getCourses()
}

}