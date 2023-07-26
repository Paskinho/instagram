import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent  {

  grades: string[] = ['math: 5', 'english: 4']

  getGrades(grade: string) {

    this.grades.push(grade)
  }
}
