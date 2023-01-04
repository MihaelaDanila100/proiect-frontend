import { TitleCasePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItem } from 'primeng/api';
import { Skill } from 'src/app/interfaces/skill';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsService } from 'src/app/services/skills.service';
import { AccountType } from 'src/app/shared/data/enums/account-type';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss', '../../../shared/styles/form-style.scss'],
  providers: [
    TitleCasePipe,
    FormBuilder
  ]
})
export class SignupPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SignupPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private capitalizeText: TitleCasePipe,
    private fb: FormBuilder,
    private skillsService: SkillsService,
    private authService: AuthService) { }

  public options = Object.values(AccountType).map((option) => this.capitalizeText.transform(option));
  public signUpForm = this.fb.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    recruiter: new FormControl(false),
    candidate: new FormControl(false),
    fullName: new FormControl('', Validators.required),
    company: new FormControl('')
  });
  public error!: string;
  public signUpFields: MenuItem[] = [
    {
      label: 'Account'
    }, {
      label: 'Data'
    }, {
      label: 'Info'
    }
  ];
  public currentIndex = 0;
  public skills: Skill[] = [];

  ngOnInit(): void {
    this.skillsService.getAllSkills().subscribe((res) => {
      this.skills = res;
    });
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  sendForm(): void {
    this.authService.executeSignUp(this.signUpForm.value).subscribe((res) => {
      if(res.id) {
        localStorage.setItem('account-type', res.type);
        localStorage.setItem('user-id', res.userId);
        this.closePopUp();
      } else {
        this.error = res.message;
      }
    })
  }

  resetForm(): void {
    this.signUpForm.reset();
  }

  openLogInPopUp(): void {
    this.dialogRef.close("login");
  }
}
