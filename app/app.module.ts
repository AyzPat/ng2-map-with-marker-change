import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {MarkerService} from "./map.service";
import { FormsModule }   from '@angular/forms';
import{MapComponent} from './map.component'

@NgModule({
  imports:      [ BrowserModule ,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQBZswEuaXJNjf_hVSDViYNWNskAdgItQ'
    }),FormsModule],
  declarations: [ AppComponent,MapComponent ],
  bootstrap:    [ AppComponent,MapComponent],
   providers: [MarkerService],
})
export class AppModule { }
