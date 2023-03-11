import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    allowNewServer1: boolean = false;
    allowNewServer2: boolean = false;
    allowNewServer3: boolean = false;
    allowNewServer4: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    serverUpdateStatus: string = 'No server was updated!';
    serverGetStatus: string = 'No server was called!';
    serverDeleteStatus: string = 'No server was deleted!';
    
    constructor () {
        setTimeout(() => {
            this.allowNewServer1 = true;
        }, 5000);
        setTimeout(() => {
            this.allowNewServer2 = true;
        }, 5300);
        setTimeout(() => {
            this.allowNewServer3 = true;
        }, 5700);
        setTimeout(() => {
            this.allowNewServer4 = true;
        }, 6000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created!';
    }

    onUpdateServer() {
        this.serverUpdateStatus = 'Server was updated!';
    }

    onGetServer() {
        this.serverGetStatus = 'Server was called!';
    }

    onDeleteServer() {
        this.serverDeleteStatus = 'Server was deleted!';
    }
}