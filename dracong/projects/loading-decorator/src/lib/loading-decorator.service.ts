import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { LoadingDecoratorComponent } from './loading-decorator.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingDecoratorService {
  private _viewContainerRef: ViewContainerRef;
  private loadingComponentRef: ComponentRef<any>;

  set viewContainerRef(viewContainerRef: ViewContainerRef) {
    this._viewContainerRef = viewContainerRef;
  }

  constructor() {}

  show(): void {
    if (!this.loadingComponentRef) {
      this.loadingComponentRef = this._viewContainerRef.createComponent(
        LoadingDecoratorComponent
      );
    }
  }

  hide(): void {
    if (this.loadingComponentRef) {
      this.loadingComponentRef.destroy();
      this.loadingComponentRef = null;
    }
  }
}
