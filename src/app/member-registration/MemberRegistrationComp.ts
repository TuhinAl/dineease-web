import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { FormService } from "../common/service/form-service";
import { ApiResponse } from "../common/util/ApiResponse";
import { UserResponse } from "../dto/UserResponse";
import { MemberRegistrationCompService } from "./MemberRegistrationCompService";

@Component({
  selector: 'MemberRegistrationComp',
  templateUrl: './MemberRegistrationComp.html',
  styleUrls: ['./MemberRegistrationComp.scss']
})
export class MemberRegistrationComp implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private formService: FormService,
    private memberRegistationService: MemberRegistrationCompService,
    private router: Router,
    private notify: ToastrService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
      // Future form controls can be easily added here
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
      // Add API call for registration here
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.registrationForm.controls).forEach(key => {
        const control = this.registrationForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  // Method to add dynamic form fields in the future
  addDynamicField(fieldName: string, validators: any[] = []) {
    this.registrationForm.addControl(fieldName, this.fb.control('', validators));
  }

  login() {
    this.memberRegistationService.login(this.registrationForm)
      .pipe(tap((res: ApiResponse<UserResponse> | null) => {
        //console.log("Test Response: ",res)
        if (res) {
          this.notify.success("Login Success");
          this.onResetAndPatch();
          //console.log("Test Response: ",res)
          const token: string | null = res?.data?.token;
          const userID: string | null = res?.data?.username;
          const id: string | null = res?.data?.id;
          const email: string | null = res?.data?.email;
          console.log(res);

          if (token) {
            console.log("Token: ", token);

            localStorage.setItem('Authorization', token);
          }
          if (id) {
            localStorage.setItem('id', id);
          }
          if (email) {
            localStorage.setItem('email', email);
          }
          if (id) {
            localStorage.setItem('id', id);
          }
          if (email) {
            localStorage.setItem('email', email);
          }
          this.router.navigateByUrl('/-dashboard')
        }
      })
      ).subscribe(res => {
        // console.log("Test Response: ",res)
      },
        error => {
          console.log("Test error: ", error)
        });
  }

  private onResetAndPatch() {
    this.registrationForm.reset();
  }
}
