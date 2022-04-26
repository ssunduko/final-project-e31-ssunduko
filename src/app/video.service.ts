import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class VideoService {

  private apiurl:string = environment.apiurl;

  constructor(private http:HttpClient) { }

  // two basic read methods follow: list and "getOne"
  listVideos(){
    return this.http.get(this.apiurl + 'api/photos');
  }

  getVideo(id:string){
    return this.http.get(this.apiurl + 'api/photos/' + id);
  }

  // Other CRUD methods TBD`
  createVideo(video: FormData){
    return this.http.post(this.apiurl+'api/photos', video);
  }

  updateVideo(id:string, data:any){
    return this.http.put(this.apiurl + 'api/photos/' + id, data);
  }

  deleteVideo(id:string){
    return this.http.delete(this.apiurl + 'api/photos/' + id);
  }

}
