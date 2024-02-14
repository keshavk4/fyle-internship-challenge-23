import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SkeletonComponent,
    MainComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
