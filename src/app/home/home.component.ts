import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/post.service';
import { PostCard } from '../shared/model/postCard';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts!:PostCard[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      p =>{
        this.posts = p;
        console.log(this.posts);
      }
    )
  }

}
