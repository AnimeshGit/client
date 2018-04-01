import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScreenoneComponent } from './screenone/screenone.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { ScreenthreeComponent } from './screenthree/screenthree.component';

import { CommonService } from './common.service';


const appRoutes: Routes = [

  { path: '', component: ScreenoneComponent },
  { path: 'screentwo', component: ScreentwoComponent },
  { path: 'screenthree', component: ScreenthreeComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    ScreenoneComponent,
    ScreentwoComponent,
    ScreenthreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
