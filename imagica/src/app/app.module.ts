import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostImageComponent } from './post-image/post-image.component';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  
} from "@angular/material";
import { ReactiveFormsModule } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { ListImageComponent } from './list-image/list-image.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PostImageComponent,
    ListImageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule
    
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  MatToolbarModule
    
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
