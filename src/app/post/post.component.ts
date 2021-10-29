import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/post.service';
import { PostCard } from '../shared/model/postCard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:PostCard ={
    title:'',
    username:'',
    content:''
  }
  invalidPost!:boolean;
  constructor(private postService:PostService, private router:Router) { }

  ngOnInit(): void {
  }

  postSubmit(){
    this.postService.postPost(this.post).subscribe(
      (response) =>{
        if (response){
          this.router.navigate(['/']) //success! redirect to home page
        }
        else{
          this.invalidPost = true;
        }
      },(err:any)=>{
        this.invalidPost = true;
        console.log(err);
      }
    )
  }
}
