import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-su-create',
  templateUrl: './su-create.component.html',
  styleUrls: ['./su-create.component.css']
})

export class SuCreateComponent implements OnInit {

  kategoriPeralatanForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.kategoriPeralatanForm = new FormGroup({
      nama_fasilitas: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get nama_fasilitas() { 
    return this.kategoriPeralatanForm.get('nama_fasilitas'); 
  }
 

  onSubmit() {
    if (this.kategoriPeralatanForm.valid) {
      //this.store.dispatch(new actions.LoginRequested(this.loginForm.value));
    }
  }

}
