import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { InfoService } from './info.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
