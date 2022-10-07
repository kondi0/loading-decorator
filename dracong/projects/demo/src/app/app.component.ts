import { Component } from '@angular/core';
import { DracongLoading } from '../../../loading-decorator/src/lib/loading.decorator';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  showLoading() {
    this.testMethod().subscribe();
  }

  @DracongLoading
  testMethod() {
    return of(null).pipe(delay(5000));
  }
}
