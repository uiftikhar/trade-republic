import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

import {
  WebsocketConnectionService,
} from '../services/websocket-connection.service';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss'],
  // TODO use this
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockViewComponent implements OnInit, OnDestroy {
  stocksForm = new FormGroup({
    newIsin: new FormControl(''),
    stocks: new FormArray([
      new FormGroup({
        isin: new FormControl(''),
        price: new FormControl(''),
      }),
    ]),
  });
  stocks = this.stocksForm.get('stocks') as FormArray;
  constructor(
    private readonly wsService: WebsocketConnectionService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.wsService.messages.subscribe((res) => {
      console.log(res);
      this.stocks.push(
        this.formBuilder.group({
          isin: res.isin,
          price: res.price,
        })
      );
    });
  }

  searchNewIsin() {
    const isin = this.stocksForm.controls['newIsin'].value;
    console.log(isin);
    this.wsService.sendMessage(isin);
    console.log(this.stocks);
  }

  ngOnDestroy(): void {
    this.stocks.value.forEach((val: { isin: string }) => {
      this.wsService.closeConnection(val.isin);
    });
  }
}
