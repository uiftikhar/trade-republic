import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trade-republic-angular';
  // constructor(private readonly wsService: WebsocketConnectionService) {}

  // ngOnInit(): void {
  //   this.wsService.messages.subscribe((res) => console.log(res));
  //   this.wsService.sendMessage('DE000BASF111');

  //   setTimeout(() => {
  //     this.wsService.closeConnection('DE000BASF111');
  //   }, 1000);
  // }
}
