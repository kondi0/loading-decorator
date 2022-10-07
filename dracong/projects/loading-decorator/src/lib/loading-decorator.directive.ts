import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingDecoratorService } from './loading-decorator.service';

/**
 * This directive should be added to your app.component in order to use the loading.decorator
 */
@Directive({
  selector: '[dracongLoading]',
})
export class LoadingDecoratorDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private loadingDecoratorService: LoadingDecoratorService
  ) {}

  ngOnInit(): void {
    this.loadingDecoratorService.viewContainerRef = this.viewContainerRef;
  }
}
