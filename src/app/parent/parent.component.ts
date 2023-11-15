import { Component, OnInit } from '@angular/core'
// import { ValueService } from '../../services/value.service'

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
export class ParentComponent implements OnInit {
  value = 0

  constructor() {}
  public test = 0
  ngOnInit(): void {
    // this.value = this.valueService.value
  }
}
