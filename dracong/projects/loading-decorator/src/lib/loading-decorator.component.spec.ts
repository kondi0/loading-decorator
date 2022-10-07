import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDecoratorComponent } from './loading-decorator.component';

describe('LoadingDecoratorComponent', () => {
  let component: LoadingDecoratorComponent;
  let fixture: ComponentFixture<LoadingDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
