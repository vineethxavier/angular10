import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
        /* === example 1 === */
  templateUrl: './servers.component.html',
        /* === example 2 === */
    /*
      template: `
      <app-server></app-server>
      <app-server></app-server>
      <app-server></app-server>
    `,
    */
        /* === example 3 === */
    /*
      template: '<app-server></app-server>',
    */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
