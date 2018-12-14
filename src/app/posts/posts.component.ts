import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostData } from '../post-data';
import { InfoService } from '../info.service';
import { CommentData } from '../comment-data';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Output() checkedPost = new EventEmitter();
  data : PostData
  details = []
  url = 'https://jsonplaceholder.typicode.com/posts';
  urldetails = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private info: InfoService) {
    this.info.getiInfoData(this.url).subscribe((data)=>{
      this.data = data
    })
    
   }

  ngOnInit() {
  }

  shareinfo(postInfo:PostData){
    this.moreDetailsPost(postInfo.id)
    this.checkedPost.emit(this.details)

  }


  moreDetailsPost(id){
    
    this.info.getiInfoData(this.urldetails).subscribe(
      (detail:any) => {
        detail.filter(
          (data: CommentData)=>{
            if ( data.postId ===  id) {
              this.details.push(data);
            }
          }
        )
    }
    )
  }
}
