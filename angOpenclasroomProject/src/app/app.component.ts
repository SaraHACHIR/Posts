import { Component } from '@angular/core';
import { Post } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 
  posts:Post[];
  date;

  constructor() {
    this.date=new Date();
    this.posts=[
      {
        content:"content 1 content 1content 1content 1content 1c 1 content 1content 1content 1content 1content 1content 1",
        title:"title 1",
        created_at:this.date,
        loveIts: 3,
        dontloveIts:4

  
      },{
        content:"content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 ",
        title:"title 2",
        created_at:this.date,
        loveIts: 4,
        dontloveIts:3

      },{
        content:"content 3 content 3content 3content 3content 3content 3content 3content 3content 3content 3",
        title:"title 3",
        created_at:this.date,
        loveIts: 5,
        dontloveIts:4

      }
    ];
  }
}