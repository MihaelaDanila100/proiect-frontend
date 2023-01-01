import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  providers: [FormBuilder]
})
export class LoginPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private authService: AuthService) { }

    public loginForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    public invalidForm: boolean = false;

  ngOnInit(): void {
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  openSignUpPopup(): void {
    this.dialogRef.close("signup");
  }

  sendForm(): void {
    this.invalidForm = !this.loginForm.valid;
    if(this.loginForm.valid) {
      this.authService.executeLogIn(this.loginForm.value).subscribe((res) => {
        if(res.id) {
          localStorage.setItem('account-type', res.type);
          localStorage.setItem('user-id', res.id);
          this.closePopUp();
        } else {
          console.log("ress ", res.message)
        }
      }, (err) => {
        console.log("errr", err)
      });
    }
  }

  resetForm(): void {
    this.invalidForm = false;
  }

}
