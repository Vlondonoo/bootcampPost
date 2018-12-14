import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { InfoService } from './info.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material.module';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
