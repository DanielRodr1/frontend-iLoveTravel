import { Component } from '@angular/core';

@Component({
  selector: 'app-create-tip',
  templateUrl: './create-tip.component.html',
  styleUrls: ['./create-tip.component.scss']
})
export class CreateTipComponent {
  title = ""
  location= ""
  description = ""
  photo = ""
  type = ""
}
