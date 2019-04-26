import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, NgForm} from '@angular/forms';
import {CreatecittizenService} from './createcittizenService';
import {Citizenmodel} from './citizenmodel';

@Component({
  selector: 'app-createcitizen',
  templateUrl: './createcitizen.component.html',
  styleUrls: ['./createcitizen.component.css']
})
export class CreatecitizenComponent implements OnInit {
  citizenControl = new FormGroup({
    firstname: new FormControl('firstname'),
    lastname: new FormControl('lastname'),
    cin: new FormControl('cin'),
  phonenumber: new FormControl('phonenumber'),
  email: new FormControl('email'),
  phonenumber2: new FormControl('phonenumber2'),
  familyNumber: new FormControl('familyNumber'),
  neighborPhone: new FormControl('neighborPhone'),
  localizationH: new FormControl('localizationH'),
  numsocialsecurity: new FormControl('numsocialsecurity'),
  nearstHydrant: new FormControl('nearstHydrant')
  });
  constructor(private  createcitizenservice: CreatecittizenService , private citizenmodel: Citizenmodel) { }

  ngOnInit() {
  }
onSubmit() {

}

createCitizen(form: NgForm) {
console.log('iam here' );
console.log((form.value));

this.createcitizenservice.submitCitizen((form.value));
}
}

