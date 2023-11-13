import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public service: DataService) { }

  public getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    this.service.user(url).subscribe(() => { console.log(url) })

  }
}
