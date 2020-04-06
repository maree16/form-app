import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rForm: FormGroup;
  post: any;
  title: '';
 name: '';
 emailAddress: '';
 conemailAddress: '';
 phoneNo: '';
 conphoneNo: '';
titles: any = [];
lastName: '';
date: '';
states: any = [];
titleAlert = 'This field is required';
cities: Array<any>;

stateList: Array<any> = [
  { id: '1', citiesArray: ['Lahore', 'Fasialabad', 'Qasoor', 'SheikhuPura', 'Gujrat'] },
  { id: '2', citiesArray: ['gilgit', 'Qalat', 'Balakoot', 'Sawat', 'Peshwar'] },
  { id: '3', citiesArray: ['Karachi', 'Hyderabad', 'Mirpur khas', 'Sukkhar', 'Shikarpur'] },
  { id: '4', citiesArray: ['Quetta', 'Chaman', 'Khuzdar', 'Turbat', 'Gawdar' ] },
];

changeCities(count) {
  // tslint:disable-next-line: triple-equals
  this.cities = this.stateList.find(con => con.id === count).citiesArray;
  }

 // titles: any = ['Alhaja', 'Alhaji', 'Chief', 'Dr.', 'Engr', 'Mr', 'Mrs', 'Ms', 'Others'];

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({

      name: [null, Validators.required],
      // tslint:disable-next-line: max-line-length
      emailAddress: [null, Validators.compose([ Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      conemailAddress: [null, Validators.required],
      // tslint:disable-next-line: max-line-length
      phoneNo: [null, Validators.required],
      conphoneNo: [null, Validators.required],
      titles: [ 0, Validators.required],
      lastName: [ null, Validators.required],
      date: [ null, Validators.required],
      address: [ null, Validators.required],
      states: [ 0, Validators.required],
      cities: [ '', Validators.required],


    });


    of(this.getTitles()).subscribe(titles => {
      this.titles = titles;
      this.rForm.controls.titles.patchValue(this.titles[0].id);
    });



    of(this.getStates()).subscribe( states => {
      this.states = states;
      this.rForm.controls.states.patchValue(this.states[0].id);
    });


  }
    getTitles() {
      return [
        { id: '', name: 'Select Title' },
        { id: '1', name: 'Alhaja' },
        { id: '2', name: 'Alhaji' },
        { id: '3', name: 'Chief' },
        { id: '4', name: 'Dr.' },
        { id: '5', name: 'Engr' },
        { id: '6', name: 'Mr' },
        { id: '7', name: 'Mrs' },
        { id: '8', name: 'Ms' },
        { id: '9', name: 'Other' }
      ];
    }

  getStates() {
    return [
      { id: '', name: 'Select State' },
      { id: '1', name: 'Punjab' },
      { id: '2', name: 'KhybarPashkku' },
      { id: '3', name: 'Sindh' },
      { id: '4', name: 'Balochistan' }

    ];

  }



  addPost(post) {
    this.name = post.name;
    this.emailAddress = post.emailAddress;
    this.conemailAddress = post.conemailAddress;
    this.phoneNo = post.phoneNo;
    this.conphoneNo = post.conphoneNo;

  }
}
