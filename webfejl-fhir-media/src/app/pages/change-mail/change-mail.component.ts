import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-mail',
  templateUrl: './change-mail.component.html',
  styleUrls: ['./change-mail.component.scss'],
})
export class ChangeMailComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    newEmail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });
  loggedIn: string = '';

  constructor(
    public dialogRef: MatDialogRef<ChangeMailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { loggedIn: string }
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.data.loggedIn;
    this.form.patchValue({ email: this.loggedIn });
  }
}
