import { Injectable } from '@angular/core';

import {
  webSocket,
  WebSocketSubject,
} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketConnectionService {
  private wsSubject$: WebSocketSubject<any> = webSocket(
    'ws://159.89.15.214:8080/'
  );

  public messages = this.wsSubject$.asObservable();
  public sendMessage(isin: string) {
    this.wsSubject$.next({
      subscribe: isin,
    });
  }

  public closeConnection(isin: string) {
    this.wsSubject$.next({
      unsubscribe: isin,
    });
  }
  constructor() {}
}
