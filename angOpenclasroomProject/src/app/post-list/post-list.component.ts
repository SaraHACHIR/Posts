import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 
 @Input() content:string;
 @Input() title:string;
 @Input() created_at:Date;
 @Input() loveIts: number;

 @Input() dontloveIts: number;

  constructor() { }

  ngOnInit() {
  }
  onPlus(){
    (this.loveIts)++
    console.log("love it",this.loveIts);
  }
  onMoins(){
    (this.loveIts)--
    console.log("don't love it",this.loveIts);
  }

}
