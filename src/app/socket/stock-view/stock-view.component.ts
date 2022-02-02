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
  Subscription,
  tap,
} from 'rxjs';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  // TODO unsubscribe
  private unsubscribe: Subscription[] = [];
  searchIcon = faSearch;
  stocksForm = new FormGroup({
    newIsin: new FormControl(''),
    stocks: new FormArray([]),
  });
  stocks = this.stocksForm.get('stocks') as FormArray;
  constructor(
    private readonly wsService: WebsocketConnectionService,
    private readonly formBuilder: FormBuilder
  ) {}

  get isButtonDisabled() {
    const isinFormValue = this.stocksForm.controls['newIsin'].value;
    return (
      // Abstract this to own function ?
      this.stocks.value.find(
        (item: { isin: string }) => item.isin === isinFormValue
      ) || isinFormValue === ''
    );
  }
  ngOnInit(): void {
    const subscribe = this.wsService
      .messages()
      .pipe(
        tap((res) => {
          const currentIsin = this.stocks.value.filter(
            (item: { isin: string }) => {
              return item.isin === res.isin;
            }
          );

          currentIsin.length === 0
            ? this.stocks.push(
                this.formBuilder.group({
                  isin: res.isin,
                  price: res.price,
                  isSubscribed: true,
                })
              )
            : (currentIsin[0].price = res.price);
        })
      )
      .subscribe();

    this.unsubscribe.push(subscribe);
  }

  searchNewIsin() {
    const isin = this.stocksForm.controls['newIsin'].value;
    this.wsService.sendMessage(isin);
  }

  ngOnDestroy(): void {
    this.stocks.value.forEach((val: { isin: string }) => {
      this.wsService.closeConnection(val.isin);
    });

    this.unsubscribe.forEach((subscription) => subscription.unsubscribe());
  }

  cancelSubscription(isin: string, index: number) {
    this.stocks.controls[index].patchValue({
      isSubscribed: false,
    });
    this.wsService.closeConnection(isin);
  }

  startSubscription(isin: string, index: number) {
    this.stocks.controls[index].patchValue({
      isSubscribed: true,
    });
    this.wsService.sendMessage(isin);
  }
}
