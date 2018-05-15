import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('address') address: ElementRef;
  @ViewChild('location') location: ElementRef;
  @ViewChild('postalCode') postalCode: ElementRef;

  currentUser: User;
  logged: boolean;
  userForm: FormGroup;

  constructor(private authService: AuthService,
              private formsBuilder: FormBuilder,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.initializeUserForm();
    this.authService.currentUser.subscribe(user => {
      this.logged = user != null;
      this.currentUser = this.authService.getUserLogged();
    });
  }

  private initializeUserForm() {
    this.userForm = this.formsBuilder.group({
      'name': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.email, Validators.required])),
      'address': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'postalCode': new FormControl('', Validators.required),
    });
  }

  isNameInvalid() {
    return this.checkFieldInvalid('name', this.name);
  }

  isLastnameInvalid() {
    return this.checkFieldInvalid('lastName', this.lastName);
  }

  isEmailInvalid() {
    return this.checkFieldInvalid('email', this.email);
  }

  isAddressInvalid() {
    return this.checkFieldInvalid('address', this.address);
  }

  isLocationInvalid() {
    return this.checkFieldInvalid('location', this.location);
  }

  isPostalCodeInvalid() {
    return this.checkFieldInvalid('postalCode', this.postalCode);
  }

  private checkFieldInvalid(field: string, element: ElementRef) {
    if (!this.isFieldValid(field) && this.isFieldDirty(field)) {
      this.addInvalidClass(element);
      return true;
    }
    this.removeInvalidClassIfNecessary(element);
    return false;
  }

  private isFieldValid(field: string) {
    return this.userForm.controls[field].valid;
  }

  private isFieldDirty(field: string) {
    return this.userForm.controls[field].dirty;
  }

  private addInvalidClass(element: ElementRef) {
    if (element != null) {
      this.renderer.addClass(element.nativeElement, 'is-invalid');
    }
  }

  private removeInvalidClassIfNecessary(element: ElementRef) {
    if (element != null && element.nativeElement.classList.contains('is-invalid')) {
      this.renderer.removeClass(element.nativeElement, 'is-invalid');
    }
  }
}
