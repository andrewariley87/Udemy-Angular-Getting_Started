import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number;
  serverStatus: string;
  allowNewServer: boolean;
  serverName: string;
  userName: string;

  constructor() {
    this.serverID = 7;
    this.serverStatus = 'ok';
    this.allowNewServer = false;
    this.userName = '';
  }

  ngOnInit() {
    this.setToDanger();
  }

  getServerStatus() {
    if(this.serverStatus === 'ok') {
      return 'up and running';
    } else {
      return this.serverStatus;
    }
  }

  setToDanger() {
    this.serverStatus = 'in great peril!!!!';
  }

  onCreateServer() {
    return alert('Server was created');
  }

  onUpdateServerName(event: any) {
    console.log(event);
  }

  stringIsEmpty(str) {
    return str === ''
  }

  submitUserName() {
    this.userName = ''
  }
}
