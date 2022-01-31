import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import {
  IconButtonComponent,
} from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [ButtonComponent, IconButtonComponent, InputComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    IconButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
