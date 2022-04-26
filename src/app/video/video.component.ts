import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  // video passed in from app-video tag of app.component
  @Input() video:any;
  // video base url
  @Input() baseUrl:any;
  // upvotedEvent bound in app-video tag, will trigger a function in app,component
  @Output() upvotedEvent = new EventEmitter<string>();
  // counter of upvotes on this video
  votes:number = 0;
  // flag for whether user has voted on this video in this session
  voted:boolean=false;

  constructor() {
  }

  // bound in video.component template to click of Upvote! button
  upvote(title:string):void{
    console.log(title);
    this.votes+=1;
    // don't let them vote this one up again
    this.voted=true;
    this.upvotedEvent.emit(title);
  }

  ngOnInit() {
    this.video.displayurl = this.baseUrl + this.video.imageurl;
  }

}
