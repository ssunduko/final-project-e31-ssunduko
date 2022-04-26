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

  ngOnInit(){
  }

  save(addvideoForm:any) : void {
    let formData = new FormData()
    let finalReviews = { rating: this.reviews.rating, review: this.reviews.review};
    formData.append('title', this.video.title);
    formData.append('description', this.video.description);
    formData.append('averageRating', this.reviews.rating);
    formData.append('reviews', JSON.stringify(finalReviews));
    console.log("submitting");
    this.videoService.createVideo(formData)
      .subscribe((video)=>{
        console.log(video)
        this.newVideo.emit();
        addvideoForm.reset();
      });
  }
}
