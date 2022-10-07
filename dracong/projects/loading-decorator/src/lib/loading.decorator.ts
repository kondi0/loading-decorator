import { Observable, tap } from 'rxjs';
import { LoadingDecoratorService } from './loading-decorator.service';
import { LoadingDecoratorModule } from './loading-decorator.module';

/**
 * Decorator that shows and hides the loading animation when attached to a method which returns an Observable
 * @example
 *   :@DracongLoading
 *   save$(object: Data): Observable<Response> {
 *     return this.http.post<Response>(`${apiurl}${this.path}`, object);
 *   }
 */
export function DracongLoading(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    const pageLoadingService: LoadingDecoratorService =
      LoadingDecoratorModule.injector.get(LoadingDecoratorService);
    pageLoadingService.show();
    return (originalMethod.apply(this, args) as Observable<unknown>).pipe(
      tap({
        next: () => {
          pageLoadingService.hide();
        },
        error: () => {
          pageLoadingService.hide();
        },
        complete: () => {
          pageLoadingService.hide();
        },
      })
    );
  };

  return descriptor;
}
