import {
  DebugElement,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  let searchButton: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    component.search = true;
    tick();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when disabled input is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    searchButton = fixture.debugElement.query(By.css('.icon-button'));
    expect(searchButton.nativeElement.disabled).toBeTruthy();
  });

  it('should emit when the button is clicked', () => {
    spyOn(component.onButtonClick, 'emit');
    component.disabled = false;
    fixture.detectChanges();
    searchButton = fixture.debugElement.query(By.css('.icon-button'));
    searchButton.nativeElement.click();
    expect(component.onButtonClick.emit).toHaveBeenCalled();
  });
});
