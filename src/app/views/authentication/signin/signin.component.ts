import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  signInForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<SigninComponent>,

  ){
  }
  ngOnInit(): void{
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get email(){
    return this.signInForm.get('email')!;
  }
  get password(){
    return this.signInForm.get('password')!;
  }

  cancel(): void {
    this.dialogRef.close();
  }
  submit(){
    if(this.signInForm.invalid) return
    console.log('não chamou');

  }
}
