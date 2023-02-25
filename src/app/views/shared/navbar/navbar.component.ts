import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../../authentication/signin/signin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{


  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SigninComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
