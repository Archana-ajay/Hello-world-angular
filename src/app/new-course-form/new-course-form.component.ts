import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  form;
  // form =new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   contact:new FormGroup({
  //     email:new FormControl(),
  //     phone:new FormControl()
  //   }),
  //   topics:new FormArray([])
    
  // });
  constructor(fb:FormBuilder){
    this.form=fb.group({
      name:['',Validators.required],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    })
  }
  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value='';
  }
  removeTopic(topic:any){
    const index=this.topics.controls.indexOf (topic)
    this.topics.removeAt(index)
  }
// categories=[
//   {id:1,name:"Development"},
//   {id:2,name:"Art"},
//   {id:3,name:"Languages"}
// ]
// submit(course:any){

//   console.log(course);

// }

get topics() {
  return this.form.get('topics') as FormArray;
}

}
