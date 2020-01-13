import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'error-connection',
  template: `
    <p>
      {{errorInfo|lowercase}}
    </p>
  `,
  styles: []
})
export class ErrorConnectionComponent implements OnInit {
  constructor() { }
  errorInfo:string;
  ngOnInit() {
    this.errorInfo='Error with api connections.!';
  }
}