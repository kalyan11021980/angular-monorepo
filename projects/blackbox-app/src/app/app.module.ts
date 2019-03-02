import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderLibModule } from 'header-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
