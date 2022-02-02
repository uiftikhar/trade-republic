import {
  Inject,
  Injectable,
  InjectionToken,
} from '@angular/core';

import {
  webSocket,
  WebSocketSubject,
} from 'rxjs/webSocket';

export const WEBSOCKET_CTOR = new InjectionToken<typeof webSocket>(
  'rxjs/webSocket.webSocket',
  {
    providedIn: 'root',
    factory: () => webSocket,
  }
);

@Injectable({
  providedIn: 'root',
})
export class WebsocketConnectionService {
  private wsSubject$: WebSocketSubject<any>;

  constructor(@Inject(WEBSOCKET_CTOR) private _webSocket: typeof webSocket) {
    this.wsSubject$ = this._webSocket('ws://159.89.15.214:8080/');
  }

  public messages() {
    return this.wsSubject$.asObservable();
  }

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
}
