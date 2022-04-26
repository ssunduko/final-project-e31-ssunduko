import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class VideoService {

  private apiurl:string = environment.apiurl;

  constructor(private http:HttpClient) { }

  // two basic read methods follow: list and "getOne"
  listVideos(){
    return this.http.get('http://localhost:8080/api/videos');
  }

  getVideo(id:string){
    return this.http.get('http://localhost:8080/api/videos/' + id);
  }

  // Other CRUD methods TBD`
  createVideo(video: FormData){
    return this.http.post('http://localhost:8080/api/videos/', video);
  }

  updateVideo(id:string, data:any){
    return this.http.put('http://localhost:8080/api/videos/' + id, data);
  }

  deleteVideo(id:string){
    return this.http.delete('http://localhost:8080/api/videos/' + id);
  }

}
