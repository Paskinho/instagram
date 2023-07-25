import {Component, Input} from "@angular/core";

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
  name = "Steven"
  @Input() surnameProps?: string
}
