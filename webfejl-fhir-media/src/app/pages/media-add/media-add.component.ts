import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.scss']
})
export class MediaAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    content: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    operator: new FormControl(''),
    subject: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<MediaAddComponent>) { }

  ngOnInit(): void {
  }

}
