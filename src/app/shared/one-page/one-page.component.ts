import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent {
  @Input() title:string=''

}
