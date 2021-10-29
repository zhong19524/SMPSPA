import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PostCard } from 'src/app/shared/model/postCard';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {}

  getAllPosts():Observable<PostCard[]>{
    return this.http.get(`${environment.apiUrl}`+'GET/posts').pipe(
      map(resp => resp as PostCard[])
    )
  }

  postPost(postCard:PostCard):Observable<boolean>{
    return this.http.post(`${environment.apiUrl}`+'POST/posts',JSON.stringify(postCard),{responseType:'text'}).pipe(
      map((response:any) =>{
        if (response){
          // console.log('postresponse!')
          // console.log(response)
          return true;
        }
        return false;
      }) 
    )
  }
}
