import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

@Component({
  selector: 'app-example-wrapper-component',
  template: `
    <app-card>
      <ng-container card-header>
        <h1>header</h1>
      </ng-container>
      <ng-container card-content>
        <h2>content</h2>
      </ng-container>
      <ng-container card-footer>
        <p>footer</p>
      </ng-container>
    </app-card>
  `,
})
class ExampleWrapperComponent {}

describe('CardComponent', () => {
  let wrapper: ExampleWrapperComponent;
  let fixture: ComponentFixture<ExampleWrapperComponent>;
  // let component: CardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleWrapperComponent, CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should display the projected: header content correctly', () => {
    expect(
      fixture.debugElement.query(By.css('app-card')).query(By.css('h1'))
        .nativeElement.innerHTML
    ).toContain('header');
  });

  it('should display the projected content: body-content correctly', () => {
    expect(
      fixture.debugElement.query(By.css('app-card')).query(By.css('h2'))
        .nativeElement.innerHTML
    ).toContain('content');
  });

  it('should display the projected content: footer content correctly', () => {
    expect(
      fixture.debugElement.query(By.css('app-card')).query(By.css('p'))
        .nativeElement.innerHTML
    ).toContain('footer');
  });
});
