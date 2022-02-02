import { Subject } from 'rxjs';

import { WebsocketConnectionService } from './websocket-connection.service';

// Mocking the websocket
let fakeSocket: Subject<any>;
const fakeSocketCtor = jasmine
  .createSpy('WEBSOCKET_CTOR')
  .and.callFake(() => fakeSocket);

describe('WebsocketConnectionService', () => {
  const clientMsg = 'a message from the client';
  const serverMsg = 'a message from the server';

  let service: WebsocketConnectionService;

  beforeEach(() => {
    // Make a new socket so we don't get lingering values leaking across tests
    fakeSocket = new Subject<any>();
    // Spy on it so we don't have to subscribe to verify it was called
    spyOn(fakeSocket, 'next').and.callThrough();

    // Reset your spies
    fakeSocketCtor.calls.reset();

    // Make the service using the ctor
    service = new WebsocketConnectionService(fakeSocketCtor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should attempt a websocket connection on create', () => {
    expect(fakeSocketCtor).toHaveBeenCalledTimes(1);
    expect(fakeSocketCtor).toHaveBeenCalledWith('ws://159.89.15.214:8080/');
  });

  it('should be able to send messages', () => {
    service.sendMessage(clientMsg);

    expect(fakeSocket.next).toHaveBeenCalledTimes(1);
    expect(fakeSocket.next).toHaveBeenCalledWith({
      subscribe: clientMsg,
    });
  });

  it('should be able to receive messages', (done) => {
    service.messages().subscribe((msg) => {
      expect(msg).toBe(serverMsg);
      done();
    });

    fakeSocket.next(serverMsg);
  });
});
