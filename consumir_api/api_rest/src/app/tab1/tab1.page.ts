import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../api/people.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private getData: PeopleService) {}

  people: any[] = [];
  errorMessage = '';

  ngOnInit() {
    this.getData.getPeople().subscribe( data => {this.people = data}, error => this.errorMessage = error);
    console.log(this.errorMessage);
  }
}
