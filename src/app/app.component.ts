  // tslint:disable-next-line: quotemark
  import { Component } from "@angular/core";
  import {
    FormBuilder,
    FormGroup,
    Validators,
    FormArray,
    FormControl,
    ValidatorFn,
  } from '@angular/forms';
  import { of } from 'rxjs';

  @Component({
    // tslint:disable-next-line: indent
    // tslint:disable-next-line: indent
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
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
    address: '';
    states: any = [];
    titleAlert = 'Field is required';
    cities: Array<any>;
    // tslint:disable-next-line: no-inferrable-types
    cityControl: '';
    gender: '';
    male: '';
    female: '';
    isDisabled = true;
    timeOut: any = null;
    showElement = true;

    stateList: Array<any> = [
      {
        id: '1',
        citiesArray: ['Lahore', 'Fasialabad', 'Qasoor', 'SheikhuPura', 'Gujrat'],
      },
      {
        id: '2',
        citiesArray: ['gilgit', 'Qalat', 'Balakoot', 'Sawat', 'Peshwar'],
      },
      {
        id: '3',
        citiesArray: [
          'Karachi',
          'Hyderabad',
          'Mirpur khas',
          'Sukkhar',
          'Shikarpur',
        ],
      },
      {
        id: '4',
        citiesArray: ['Quetta', 'Chaman', 'Khuzdar', 'Turbat', 'Gawdar'],
      },
    ];

    changeCities(count) {
      // tslint:disable-next-line: triple-equals
      this.cities = this.stateList.find((con) => con.id === count).citiesArray;
    }

    genderSelect(e) {
      if (e === '1') {
        this.rForm.patchValue({ gender: 'male' });
      } else {
        this.rForm.patchValue({ gender: 'female' });
      }
    }
    // tslint:disable-next-line: member-ordering
    doSomething() {
      console.log(this);
      if (this.rForm.controls.emailAddress.valid) {
        setTimeout(() => {
          this.disableForm();
        }, 1000);
      }
    }

    disableForm() {
      this.isDisabled = false;
    }

    markDirty() {
      Object.keys(this.rForm.controls).forEach((key) => {
        // tslint:disable-next-line: no-unused-expression
        this.rForm.get(key).markAsTouched();
      });
    }
    playDisabled() {
    if (this.rForm.get('emailAddress').valid) {
      this.isDisabled =  false;
    }
    if (!this.rForm.get('emailAddress').valid) {
    this.isDisabled =  true;
    }
  }
    constructor(private fb: FormBuilder) {
      this.rForm = fb.group({
        name: [null, Validators.required],
        // tslint:disable-next-line: max-line-length
        emailAddress: [
          null,
          Validators.compose([
            Validators.required,
            Validators.email,
              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
        ],
        conemailAddress: [null, Validators.required],
        // tslint:disable-next-line: max-line-length
        phoneNo: [null, Validators.required],
        conphoneNo: [null, Validators.required],
        titles: [0, Validators.required],
        lastName: [null, Validators.required],
        date: [null, Validators.required],
        address: [null, Validators.required],
        states: [0, Validators.required],
        cityControl: [null, Validators.required],
        gender: [],
      });


      of(this.getTitles()).subscribe((titles) => {
        this.titles = titles;
        this.rForm.controls.titles.patchValue(this.titles[0].id);
      });

      of(this.getStates()).subscribe((states) => {
        this.states = states;
        this.rForm.controls.states.patchValue(this.states[0].id);
      });
    }
  getTitles() {
      return [
        { id: '', name: 'Select Title' },
        { id: '1', name: 'Mr' },
        { id: '2', name: 'Mrs' },
        { id: '3', name: 'Ms' },
      ];
    }

    getStates() {
      return [
        { id: '', name: 'Select State' },
        { id: '1', name: 'Punjab' },
        { id: '2', name: 'KhybarPashkku' },
        { id: '3', name: 'Sindh' },
        { id: '4', name: 'Balochistan' },
      ];
    }

    addPost(post) {
      this.name = post.name;
      this.emailAddress = post.emailAddress;
      this.conemailAddress = post.conemailAddress;
      this.phoneNo = post.phoneNo;
      this.conphoneNo = post.conphoneNo;
      this.titles = post.titles;
      this.date = post.date;
      this.lastName = post.lastName;
      this.address = post.address;
      this.states = post.states;
      this.cityControl = post.cityControl;
    }
  }
