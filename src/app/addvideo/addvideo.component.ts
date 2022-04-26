import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  @Output() newVideo = new EventEmitter();

  video:any = {}
  reviews:any ={}

  constructor(private videoService:VideoService) { }

  ngOnInit(){ }

  save(addvideoForm:any) : void {
    let formData = new FormData();
    formData.append('title', this.video.title);
    formData.append('description', this.video.description);
    let reviews = { rating: '5', review: 'This is yet another review'};
    formData.append('averageRating', '3');
    formData.append('reviews', JSON.stringify(reviews));
    console.log("submitting");
    this.videoService.createVideo(formData)
      .subscribe((video)=>{
        console.log(video)
        this.newVideo.emit();
        addvideoForm.reset();
      });
  }
}
