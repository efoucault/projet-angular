import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { RouterModule, Routes } from '@angular/router';
import { PostService} from "./services/post.service"

const appRoutes: Routes = [
  { path: 'posts', component: PostViewComponent },
  { path: 'edit', component: EditPostComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditPostComponent,
    AuthComponent,
    PostViewComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
