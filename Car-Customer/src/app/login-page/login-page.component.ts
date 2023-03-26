import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  userData;
  wrongPassword = false;
  userNotFound = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: DataProviderService
  ) {}

  ngOnInit(): void {
    this.initiateLoginForm();
  }
  userLoginForm!: FormGroup;

  get form() {
    return this.userLoginForm.controls;
  }
  initiateLoginForm() {
    this.userLoginForm = this.formBuilder.group({
      userEmailId: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  checkUser() {
    // this.wrongPassword = false;
    // this.userNotFound = false;
    // this.api.getUser(this.userLoginForm.value).subscribe(
    //   (data) => {
    //     if ('user' in data) {
    //       this.userData = data['user'];
    //       localStorage.setItem(
    //         'user',
    //         JSON.stringify({
    //           userName: this.userData?.userName,
    //           userEmailId: this.userData?.userEmailId,
    //           groupsInvolved: this.userData?.groupsInvolved,
    //         })
    //       );
    this.api.sendUserData('test');
    this.router.navigate(['home']);
    //     } else {
    //     }
    //   },
    //   (error) => {
    //     if (error.error['error'] == 'Invalid password') {
    //       this.wrongPassword = true;
    //     } else {
    //       this.userNotFound = true;
    //       this.userLoginForm.reset();
    //     }
    //   }
    // );
  }
}
