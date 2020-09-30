import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './../../person.service';
import { Person } from './../../Person';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  persons: Person[];
  id: number;
  constructor(private http: HttpClient, private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(
      (data) => {
        this.persons = JSON.parse(JSON.stringify(data)) as Person[];
      },
      (error) => console.log(error)
    );
  }
  delete(id: Number) {
    this.personService.deletePerson(id);
  }
  edit(id) {
    this.id = id;
  }
}
