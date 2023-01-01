import { Component, OnInit } from '@angular/core';
import { Button } from '../../interfaces/button';
import { NavbarButtons } from '../../data/consts/navbar-btns';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginPopupComponent } from 'src/app/views/popups/login-popup/login-popup.component';
import { SignupPopupComponent } from 'src/app/views/popups/signup-popup/signup-popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  buttons: {[key: string]: Button} = NavbarButtons;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogInDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '40vh';
    const dialogRef = this.matDialog.open(LoginPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if(data === "signup") this.openSignUpDialog();
    });
  }

  openSignUpDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '60%';
    const dialogRef = this.matDialog.open(SignupPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if(data === "login") this.openLogInDialog();
    });
  }

}
