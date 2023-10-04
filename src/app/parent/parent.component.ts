import { Component, OnInit } from '@angular/core'

interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  title = 'Lorem ipsum dolor sit amet'
  url = 'https://angular.io/api/common/SlicePipe'
  date = new Date(2022, 4, 12, 10)
}
