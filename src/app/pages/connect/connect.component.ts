import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  pageType:string;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.pageType=this.activatedRoute.snapshot.params['type'] 
    console.log(this.pageType);
  }
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(() => {
      console.log(this.pageType);
      this.pageType=this.activatedRoute.snapshot.params['type'] 
  });
  }
}
