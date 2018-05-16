import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Constants} from '../../../utils/constants';
import {FirestoreService} from '../../../services/firestore.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [MessageService]
})
export class InformationComponent implements OnInit, OnDestroy {

  @ViewChild('name') name: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('address') address: ElementRef;
  @ViewChild('location') location: ElementRef;
  @ViewChild('postalCode') postalCode: ElementRef;
  @ViewChild('cardNumber') cardNumber;
  @ViewChild('cvv') cvv: ElementRef;
  @ViewChild('expiryDate') expiryDate;

  currentUser: User;
  logged: boolean;
  userForm: FormGroup;

  constructor(private authService: AuthService,
              private formsBuilder: FormBuilder,
              private renderer: Renderer2,
              private firestoreService: FirestoreService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.logged = user != null;
      this.currentUser = this.authService.getUserLogged();
    });
    this.initializeUserForm();
  }

  ngOnDestroy() {

  }

  private initializeUserForm() {
    this.userForm = this.formsBuilder.group({
      'name': new FormControl(this.currentUser.name, Validators.required),
      'lastName': new FormControl(this.currentUser.lastName, Validators.required),
      'email': new FormControl(this.currentUser.email, Validators.compose([Validators.email, Validators.required])),
      'address': new FormControl(this.currentUser.address, Validators.required),
      'location': new FormControl(this.currentUser.location, Validators.required),
      'postalCode': new FormControl(this.currentUser.postalCode, Validators.required),
      'cardNumber': new FormControl(this.currentUser.cardNumber, Validators.compose(
        [Validators.pattern(Constants.visaPattern), Validators.required])),
      'cvv': new FormControl(this.currentUser.cvv, Validators.required),
      'expiryDate': new FormControl(this.currentUser.expiryDate, Validators.required)
    });
    this.userForm.controls['cardNumber'].setValue(this.currentUser.cardNumber);
    this.userForm.controls['expiryDate'].setValue(this.currentUser.expiryDate);
    this.userForm.controls['email'].disable();
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

  isCardNumberInvalid() {
    if (this.cardNumber != null) {
      const invalid = this.checkFieldInvalid('cardNumber', this.cardNumber.el, true);
      if (invalid) {
        this.setDisplayFeedback('invalid-credit-card');
      }
      return invalid;
    }
    this.setDisplayFeedback('invalid-credit-card', 'none');
    return false;
  }

  isCvvInvalid() {
    return this.checkFieldInvalid('cvv', this.cvv);
  }


  isExpiryDateInvalid() {
    if (this.expiryDate != null) {
      const invalid = this.checkFieldInvalid('expiryDate', this.expiryDate.el, true);
      if (invalid) {
        this.setDisplayFeedback('invalid-expiry-date');
      }
      return invalid;
    }
    this.setDisplayFeedback('invalid-expiry-date', 'none');
    return false;
  }

  private checkFieldInvalid(field: string, element: ElementRef, isInputMask: boolean = false) {
    if (!this.isFieldValid(field) && this.isFieldDirty(field)) {
      isInputMask ? this.addInvalidClassToInputMask(element) : this.addInvalidClass(element);
      return true;
    }
    isInputMask ? this.removeInvalidClassToInputMaskIfNecessary(element) : this.removeInvalidClassIfNecessary(element);
    return false;
  }

  private isFieldValid(field: string) {
    return this.userForm.controls[field].valid;
  }

  private isFieldDirty(field: string) {
    return this.userForm.controls[field].dirty;
  }

  private addInvalidClassToInputMask(element: ElementRef) {
    if (element != null) {
      const input = element.nativeElement.children[0];
      this.renderer.addClass(input, 'is-invalid');
    }
  }

  private addInvalidClass(element: ElementRef) {
    if (element != null) {
      this.renderer.addClass(element.nativeElement, 'is-invalid');
    }
  }

  private removeInvalidClassIfNecessary(element: ElementRef) {
    if (element != null) {
      if (element.nativeElement.classList.contains('is-invalid')) {
        this.renderer.removeClass(element.nativeElement, 'is-invalid');
      }
    }
  }

  private removeInvalidClassToInputMaskIfNecessary(element: ElementRef) {
    if (element != null) {
      const input = element.nativeElement.children[0];
      if (input.classList.contains('is-invalid')) {
        this.renderer.removeClass(input, 'is-invalid');
      }
    }
  }

  private setDisplayFeedback(className: string, value: string = 'block') {
    const feedback: HTMLCollection = document.getElementsByClassName(className);
    if (feedback.length > 0) {
      this.renderer.setStyle(feedback[0], 'display', value);
    }
  }

  async _updateInfo() {
    const user = {...this.currentUser, ...this.userForm.getRawValue()};
    try {
      await this.firestoreService.updateUser(user);
      this.authService.storeUserLogged(user);
      this.messageService.add({severity: 'success', summary: '¡Actualizado!', detail: 'Se ha actualizado su información de usuario'});
    } catch (e) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ha ocurrido error actualizando su información'});
    }
  }
}
