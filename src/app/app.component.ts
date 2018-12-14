import { Component } from '@angular/core';
import { PostData } from './post-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcampPost';
  data: PostData
  selectedPost( selected ) {
    console.log('data post', this.data);
    console.log('data selected ', selected );
    this.data = selected;
    
  }



}
