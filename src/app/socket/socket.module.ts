import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SocketRoutingModule } from './socket-routing.module';
import { StockViewComponent } from './stock-view/stock-view.component';

@NgModule({
  declarations: [StockViewComponent],
  imports: [SharedModule, CommonModule, SocketRoutingModule],
})
export class SocketModule {}
