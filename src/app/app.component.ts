import {Component} from '@angular/core';

interface IUser {
  age: number
  name: string
}


@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAppLoading = true

  constructor() {
    setTimeout(()=> {
      this.isAppLoading = false
    },3000)
  }
}


