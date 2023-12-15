import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  addGuestControl: any;
  tnc: any;
  //emailFormControl: any;
  // guestForm: any;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigService, private fb: FormBuilder,
    private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: roomId, disabled: true },
        { validators: [Validators.required] }),
      guestEmail: ['', {
        updatedOn: 'blur', Validators:
          [Validators.required, Validators.email]
      }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingDate: [''],
      bookingAmount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      mobileNumber: [''],
      guestName: ['', [Validators.required,
      Validators.minLength(5),
      CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],

      address: this.fb.group({
        AddressLine: ['', { validators: [Validators.required] }],
        AddressLine2: [''],
        City: ['', { validators: [Validators.required] }],
        State: ['', { validators: [Validators.required] }],
        Country: [''],
        ZipCode: [''],
      }),
      guests: this.fb.array([this.addGuestControl]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] })
    }), { updateOn: 'blur', Validators: [CustomValidator.validatedate] };

    this.getBookingData();

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data));

  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    //this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => { console.log(data)})
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
     // roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date(),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    })
  }

  Addguest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }
  addguest() {
    return this.fb.group({

    })
  }

  removeguest(i: number) {
    this.guests.removeAt(i);
  }

  addpassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletepassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }

  }

}
