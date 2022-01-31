import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { StockViewComponent } from './stock-view/stock-view.component';

const routes: Routes = [
  {
    path: '',
    component: StockViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocketRoutingModule {}
