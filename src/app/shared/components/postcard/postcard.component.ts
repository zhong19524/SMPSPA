import { Component, OnInit } from '@angular/core';
import { PostCard } from '../../model/postCard';
import { Input } from '@angular/core';
@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  @Input() post!:PostCard;
  constructor() { }

  ngOnInit(): void {
  }

}
