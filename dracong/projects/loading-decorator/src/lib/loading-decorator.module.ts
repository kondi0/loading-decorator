import { Injector, NgModule } from '@angular/core';
import { LoadingDecoratorComponent } from './loading-decorator.component';
import { LoadingDecoratorDirective } from './loading-decorator.directive';

@NgModule({
  declarations: [LoadingDecoratorComponent, LoadingDecoratorDirective],
  imports: [],
  exports: [LoadingDecoratorDirective],
})
export class LoadingDecoratorModule {
  static injector: Injector;
  constructor(injector: Injector) {
    LoadingDecoratorModule.injector = injector;
  }
}
