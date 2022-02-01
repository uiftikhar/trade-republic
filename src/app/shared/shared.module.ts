import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import {
  IconButtonComponent,
} from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    InputComponent,
    HeaderComponent,
    CardComponent,
  ],
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
    CardComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
