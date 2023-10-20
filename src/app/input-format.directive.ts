import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format:any;
  constructor(private el:ElementRef) { } //access to dom
  
  @HostListener('blur') onBlur(){
    const value:string=this.el.nativeElement.value;                   //read the value of input field
    if (this.format=="lowercase")
      this.el.nativeElement.value=value.toLowerCase();
    else
    this.el.nativeElement.value=value.toUpperCase();
    
  }
 

}
