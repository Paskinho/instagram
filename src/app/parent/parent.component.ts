import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  isSuccess = false

  constructor() {
    setTimeout(() => {
      this.isSuccess = true
    }, 3000)
  }
}
