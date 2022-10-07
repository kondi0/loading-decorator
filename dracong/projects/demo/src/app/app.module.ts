import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingDecoratorModule } from '../../../loading-decorator/src/lib/loading-decorator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadingDecoratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
