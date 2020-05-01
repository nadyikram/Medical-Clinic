import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

	@Input() lastname: string;
    @Input() motdepasse: string;

  constructor() { }

  ngOnInit(): void {
  }

}
