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
  fileToUpload:any = null;

  constructor(private videoService:VideoService) { }

  fileInputField:any = null;

  handleFileInput(target:any):void{
    this.fileToUpload = target.files.item(0);
    this.fileInputField = target;
  }

  ngOnInit(){ }

  save(addvideoForm:any) : void {
    let formData = new FormData();
    formData.append('image', this.fileToUpload, this.fileToUpload.name);
    formData.append('title', this.video.title);
    formData.append('description', this.video.description);
    console.log("submitting");
    this.videoService.createVideo(formData)
      .subscribe((video)=>{
        console.log(video)
        this.newVideo.emit();
        addvideoForm.reset();
        this.fileInputField.value="";
      });
  }
}
