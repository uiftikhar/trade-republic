import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SocketRoutingModule } from './socket-routing.module';
import { StockViewComponent } from './stock-view/stock-view.component';

@NgModule({
  declarations: [StockViewComponent],
  imports: [
    CommonModule,
    SocketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SocketModule {}
