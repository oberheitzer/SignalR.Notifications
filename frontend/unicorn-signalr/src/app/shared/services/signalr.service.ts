import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection: HubConnection;
  private unicorns: number;

  constructor() { }

  public startConnection(): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44307/unicornhub')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started!');
        this.getTheUnicorns();
        this.startListening();
      })
      .catch(error => console.log('Error: ', error));
  }

  private getTheUnicorns(): void {
    this.hubConnection.invoke('SendNotification');
  }

  private startListening(): void {
    console.log('Start listening...');
    this.hubConnection.on('GetUnicorns', (unicorns: number) => {
      this.unicorns = unicorns;
    });
  }

  get getUnicorns() {
    return this.unicorns;
  }
}
