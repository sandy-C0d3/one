import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirukComponent } from './components/tiruk/tiruk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    TirukComponent,
    HarrypotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
