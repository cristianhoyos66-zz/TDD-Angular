import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-fakeasync',
  templateUrl: './async-fakeasync.component.html',
  styleUrls: ['./async-fakeasync.component.css']
})
export class AsyncFakeasyncComponent {

  title: string;
  value: number = 0;
  message: string;

  setTitle() {
    new Promise(resolve => {
      resolve('¡Título!');
    }).then((val: string) => {
      this.title = val;
    });
  }

  increment() {
    setTimeout(() => {
      if (this.value < 15) {
        this.value++;
        this.message = '';
      } else {
        this.message = 'Maximum reached!';
      }
    }, 5000); // wait 5 seconds to increment the value
  }

}
