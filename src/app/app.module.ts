import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { ValueService } from '../services/value.service'

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ValueService],
  bootstrap: [AppComponent],
})
export class AppModule {}
