import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}
  getAllPersons() {
    return this.http.get('http://localhost:3000/persons');
  }

  getPerson(id: Number) {
    return this.http.get(`http://localhost:3000/persons/${id}`);
  }
  addPerson(person: Object) {
    this.http
      .post<any>('http://localhost:3000/persons', person)
      .subscribe((res) => {
        console.log(res);
      });
  }
  editPerson(id: Number, person: Object) {
    return this.http.put(`http://localhost:3000/persons/${id}`, person);
  }
  deletePerson(id: Number) {
    this.http
      .delete(`http://localhost:3000/persons/${id}`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
