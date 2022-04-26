import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class VideoService {
  // track maxId value, will be incremented when we create()
  maxId = 3;
  private apiurl:string = environment.apiurl;
  videoUrl:string = environment.videoUrl;

  constructor(private http:HttpClient) { }

  // two basic read methods follow: list and "getOne"
  listVideos(){
    return this.http.get(this.apiurl + 'api/videos');
  }

  getVideo(id:string){
    return this.http.get(this.apiurl + 'api/videos/' + id);
  }

  // Other CRUD methods TBD`
  createVideo(video: FormData){
    return this.http.post(this.apiurl+'api/videos', video);
  }

  updateVideo(id:string, data:any){
    return this.http.put(this.apiurl + 'api/videos/' + id, data);
  }

  deleteVideo(id:string){
    return this.http.delete(this.apiurl + 'api/videos/' + id);
  }

}
