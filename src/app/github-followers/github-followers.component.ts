import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map} from 'rxjs';
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit{
  followers:any;
  constructor(
    private route:ActivatedRoute,
    private service:GithubFollowersService){

  }
  ngOnInit(){
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
    switchMap(combined=>{
      const id= combined[0].get('id');
     const page=combined[1].get('page');
     //this.service.getAll({id:id,page:page})
     return this.service.getAll()
    }))
    .subscribe(followers=>this.followers=followers)
    
   // let page=this.route.snapshot.queryParamMap.get('page')
   
  }

}
