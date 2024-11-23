import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {  } from '@angular/common/http';
import { OnePageComponent } from './shared/one-page/one-page.component';
// Create a function to load translations from the assets/i18n folder

@NgModule({
  declarations: [
    AppComponent,
    OnePageComponent
 ],
  imports: [
    BrowserModule,
    SharedModule,
    
    

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
