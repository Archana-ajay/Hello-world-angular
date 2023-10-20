import { Component,OnInit,Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class FavoriteComponent {
@Input('is-favorite') isSelected = true;
@Output('change') click=new EventEmitter()
onClick(){
this.isSelected=!this.isSelected
this.click.emit({newValue:this.isSelected});
}
}
export interface FavoriteChangedEventArgs{
  newValue:boolean
}
