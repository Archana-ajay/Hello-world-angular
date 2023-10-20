import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMethods=[
    {id:1,name:"email"},
    {id:2,name:"form"}
  ]
  log(x:any){
    console.log(x);
    
  }
  submit(f:any){
    console.log(f);
    
  }
}
