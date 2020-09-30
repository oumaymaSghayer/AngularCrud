import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from './../../Person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../../person.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  id: Number;
  person: Person;
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPerson(this.id).subscribe(
      (data) => {
        this.person = JSON.parse(JSON.stringify(data));
        console.log(this.person);
      },
      (err) => console.log(err)
    );
  }
  //edit person
  onSubmit(form: NgForm) {
    this.personService.editPerson(this.id, form.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      (error) => console.log(error)
    );
  }
}
