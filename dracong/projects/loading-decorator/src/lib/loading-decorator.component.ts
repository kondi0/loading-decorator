import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-loading-decorator',
  template: `
    <div class="dng-loading">
      <div class="dng-loading-content">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./loading-decorator.component.scss'],
})
export class LoadingDecoratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
