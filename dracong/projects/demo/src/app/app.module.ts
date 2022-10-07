import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingDecoratorModule } from '../../../loading-decorator/src/lib';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadingDecoratorModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
