import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './../../person.service';
import { Person } from './../../Person';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input() id: Number;

  person: Person;
  constructor(private http: HttpClient, private personService: PersonService) {}

  ngOnInit(): void {
    this.http
      .get(`http://localhost:3000/persons/${this.id}`)
      .subscribe((res) => {
        this.person = JSON.parse(JSON.stringify(res));
      });
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    this.personService.addPerson(form.value);
  }
}
