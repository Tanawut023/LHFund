import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { BaseApplicationDataService } from '../../service/base-application-data.service';
import { first } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ProfileService } from '../../service/profile.service'
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { getDate } from '../../Share/dateformat'
declare var $: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnDestroy {

  userall: any = {};
  userselect: any = {};
  unitholderno: any = "init";
  profile: any = {};
  countrylist;
  provincelist: any;
  amphurlist;
  tambonlist;
  form: FormGroup;
  isNotValid: boolean;
  message: any;
  mobie: any;
  refcode: any;
  formotp: FormGroup;
  res: any = {};
  user: any;
  addreszipcode: any = {};
  umphur;
  tumbon;
  addreszipcodeforselect: any = {};
  zipcode;
  show: boolean = false;
  loading = false;

  constructor(
    private basedataservice: BaseApplicationDataService,
    private profileserice: ProfileService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormValidate();   
    this.getaddresslist();

    $('#mutual-tab-menu').find('li').removeClass('current');
    $('#mutual-tab-menu').find('li#menu1').addClass('current');

  }
  openmodal() {
    $('#otpprofile').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });
  }

  onChange() {

    for (let i = 0; i < this.userall.unitholderlist.length; i++) {
      if (this.userall.unitholderlist[i].UnitholderId == this.unitholderno.UnitholderId) {
        this.userselect = this.userall.unitholderlist[i];
      }
    }
    this.getprofileinfo();

  }

  getSelectListUnitholder() {
    this.basedataservice.getSelectListUnitholder()
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          this.userall = data;
          this.unitholderno = this.userall.unitholderlist[0];
          this.userselect = this.userall.unitholderlist[0];
          this.getprofileinfo();
        },
        error => {
          console.log(error)

        });
  }

  getprofileinfo() {
    let params = new HttpParams().set('unitholderid', this.userselect.UnitholderId);

    this.profileserice.getprofileinfo(params)
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          console.log(data);

          this.profile = data;
          for (var key in this.countrylist) {
            if (this.countrylist.hasOwnProperty(key)) {
              // var val = this.countrylist[key];
              if (this.profile.unitholderinfo.ContactCountry == this.countrylist[key].CountryName) {
                this.profile.unitholderinfo.ContactCountry = this.countrylist[key];
              }
            }
          }

          for (var key in this.provincelist) {
            if (this.provincelist.hasOwnProperty(key)) {
              // var val = this.countrylist[key];
              if (this.profile.unitholderinfo.ContactProvince == this.provincelist[key].ProvinceName) {
                this.profile.unitholderinfo.ContactProvince = this.provincelist[key];
              }

            }
          }
          this.changeprovince(this.profile.umpurlist[0].ProvinceID);
          this.changeumpur(this.profile.tumbollist[0].UmpurID);

          setTimeout(() => {            
              this.setdefault();
                      
          }, 100);

        },
        error => {
          console.log(error)

        });
  }

  getaddresslist() {
    this.profileserice.getaddresslist()
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          this.countrylist = data['countrylist'];
          this.provincelist = data['provincelist'];
          this.getSelectListUnitholder();
          console.log(this.countrylist);
          console.log(this.provincelist);
        },
        error => {
          console.log(error)

        });
  }

  createFormValidate() {
    this.form = this.fb.group({

      address: [null,
        [
          Validators.required,
        ]],
      tambon: ["",
        [
          Validators.required,
        ]],
      amphur: ["",
        [
          Validators.required,
        ]],
      province: ["",
        [
          Validators.required,
        ]],
      postcode: [null,
        [
          Validators.required,
        ]],
      country: [null,
        [
          Validators.required,
        ]],
      Mphone: [null],
      Ophone: [null],
      Faxno: [null],
      allowtax: [null,
        [
          Validators.required,
        ]]

    });

    this.formotp = this.fb.group({
      otp: [null,
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/)
        ]
      ]
    })
  }
  onSubmited() {
    console.log(this.form);
    if (this.form.valid) {
      this.isNotValid = false;
      this.loading = true;
      const user = {
        Id: this.profile.unitholderinfo.Id,
        UnitHolderID: this.profile.unitholderinfo.UnitHolderID,
        OfficePhoneNo: this.form.controls.Ophone.value,
        HomePhoneNo: this.form.controls.Mphone.value,
        FaxNo: this.form.controls.Faxno.value,
        ContactAddress1: this.form.controls.address.value,
        ContactAddress2: "ต." + this.form.controls.tambon.value.TumbolName + " อ." + this.form.controls.amphur.value.UmpurName,
        ContactTumbolID: this.form.controls.tambon.value.TumbolID,
        ContactTumbol: this.form.controls.tambon.value.TumbolName,
        ContactUmpurID: this.form.controls.amphur.value.UmpurID,
        ContactUmpur: this.form.controls.amphur.value.UmpurName,
        ContactProvinceID: this.form.controls.province.value.ProvinceID,
        ContactProvince: this.form.controls.province.value.ProvinceName,
        ContactCountryID: this.form.controls.country.value.CountryID,
        ContactCountry: this.form.controls.country.value.CountryName,
        ContactZipCode: this.form.controls.postcode.value,
        AllowWithholdTax: this.form.controls.allowtax.value,
      }
      this.user = user;
      console.log(user);
      this.profileserice.submiteditprofile(this.user)
        .pipe(first())
        .subscribe(
          data => {
            this.res = data;
            console.log(data);
            this.loading = false;
            $('#otpprofile').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });

          },
          error => {
            console.log(error);
            this.loading = false;
            this.message = error.error.messages;
            $('#message').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });
          });

    }
    else {
      this.isNotValid = true;
      this.validateAllFormFields(this.form);
    }

  }
  setdefault() {

    this.form.controls['address'].setValue(this.profile.unitholderinfo.ContactAddress1, { onlySelf: true });
    this.form.controls['tambon'].setValue(this.profile.unitholderinfo.ContactTumbol, { onlySelf: true });
    this.form.controls['amphur'].setValue(this.profile.unitholderinfo.ContactUmpur, { onlySelf: true });
    this.form.controls['province'].setValue(this.profile.unitholderinfo.ContactProvince, { onlySelf: true });
    this.form.controls['postcode'].setValue(this.profile.unitholderinfo.ContactZipCode, { onlySelf: true });
    this.form.controls['country'].setValue(this.profile.unitholderinfo.ContactCountry, { onlySelf: true });
    this.form.controls['Mphone'].setValue(this.profile.unitholderinfo.HomePhoneNo, { onlySelf: true });
    this.form.controls['Ophone'].setValue(this.profile.unitholderinfo.OfficePhoneNo, { onlySelf: true });
    this.form.controls['Faxno'].setValue(this.profile.unitholderinfo.FaxNo, { onlySelf: true });
    this.form.controls['allowtax'].setValue(this.profile.unitholderinfo.AllowWithholdTax, { onlySelf: true });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  requestotp() {
    this.loading = true;
    this.basedataservice.requestotp()
      .subscribe((data) => {
        console.log(data);
        this.res = data;
        this.loading = false;
      },
        (error) => {
          console.log(error);
          this.loading = false;
          this.message = error.error.messages;
            setTimeout(() => {
              $('#message').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
              });
            }, 100);
        });
  }

  updateprofile() {

    console.log(this.formotp)
    if (this.formotp.valid) {
      this.isNotValid = false;
      this.loading = true;
      let Params = new HttpParams();
      Params = Params.append('otp', this.formotp.controls.otp.value);
      Params = Params.append('refcode', this.res.refcode);
      const user = {
        Id: this.profile.unitholderinfo.Id,
        UnitHolderID: this.profile.unitholderinfo.UnitHolderID,
        OfficePhoneNo: this.form.controls.Ophone.value,
        HomePhoneNo: this.form.controls.Mphone.value,
        FaxNo: this.form.controls.Faxno.value,
        ContactAddress1: this.form.controls.address.value,
        ContactAddress2: "ต." + this.form.controls.tambon.value.TumbolName + " อ." + this.form.controls.amphur.value.UmpurName,
        ContactTumbolID: this.form.controls.tambon.value.TumbolID,
        ContactProvince: this.form.controls.province.value.ProvinceName,
        ContactCountry: this.form.controls.country.value.CountryName,
        ContactZipCode: this.form.controls.postcode.value,
        AllowWithholdTax: this.form.controls.allowtax.value,
        UpdateFlag: "string",
        CreateDate: getDate()
      }
      console.log(user);
      this.profileserice.updateprofile(user, Params)
        .pipe(first())
        .subscribe(
          data => {
            this.res = data;
            this.loading = false;
            console.log(data);
            $('#otpprofile').modal('toggle');
            this.message = "บันทึกข้อมูลสำเร็จ";
            setTimeout(() => {
              $('#message').modal({
                backdrop: 'static',
                keyboard: false,
                show: true
              });
            }, 100);
            this.resetotp();
            
          },
          error => {
            console.log(error);
            this.loading = false;
            this.message = error.error.messages;
          });

    } else {
      this.isNotValid = true;
      this.validateAllFormFields(this.formotp);
    }
  }
  reset() {
    this.getprofileinfo();
    this.resetotp();      
    this.message = "";
  }

  resetotp(){
    this.formotp.reset();
  }

  autoselected() {
    if (this.form.controls.postcode.value) {

      let Params = new HttpParams();
      Params = Params.append('zipcode', this.form.controls.postcode.value);

      this.profileserice.getaddressbyzipcode(Params)
        .pipe(first())
        .subscribe(
          data => {
            setTimeout(() => {
              $('.selectpicker').selectpicker('refresh');
          }, 100);
            console.log(data);
            this.addreszipcodeforselect = data;

            for (var key in this.provincelist) {
              if (this.provincelist.hasOwnProperty(key)) {
                // var val = this.countrylist[key];
                if (this.addreszipcodeforselect.provinceid == this.provincelist[key].ProvinceID) {
                  this.profile.unitholderinfo.ContactProvince = this.provincelist[key];

                  this.form.controls['province'].setValue(this.profile.unitholderinfo.ContactProvince, { onlySelf: true });
                  // this.setdefault();
                  console.log('here');

                }

              }
            }

          },
          error => {
            $('#otpprofile').modal('toggle');
            console.log(error);
            this.message = error.error.error_description;
            $('#message').modal({
              backdrop: 'static',
              keyboard: false,
              show: true
            });
          });

    }
  }

  changeprovince(ProvinceID) {
    this.addreszipcodeforselect.provinceid
    let Params = new HttpParams();
    Params = Params.append('provinceid', ProvinceID);

    this.profileserice.changeprovince(Params)
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          console.log(data);
          this.amphurlist = data['umpurlist'];
          this.zipcode = data['zipcode'];
          for (var key in this.amphurlist) {
            if (this.amphurlist.hasOwnProperty(key)) {
              // var val = this.countrylist[key];
              if (this.profile.unitholderinfo.ContactUmpur == this.amphurlist[key].UmpurName) {
                this.profile.unitholderinfo.ContactUmpur = this.amphurlist[key];
                console.log('here1');

              }

            }
          }

        },
        error => {
          console.log(error);
          this.message = error.error.error_description;
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        });
  }

  changeumpur(umphurID) {
    this.addreszipcodeforselect.provinceid
    let Params = new HttpParams();
    Params = Params.append('umpurid', umphurID);

    this.profileserice.changeumpur(Params)
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          console.log(data);
          this.tambonlist = data['tumbollist'];
          for (var key in this.tambonlist) {
            if (this.tambonlist.hasOwnProperty(key)) {
              // var val = this.countrylist[key];
              if (this.profile.unitholderinfo.ContactTumbol == this.tambonlist[key].TumbolName) {
                this.profile.unitholderinfo.ContactTumbol = this.tambonlist[key];
                console.log('here2');

              }

            }
          }

        },
        error => {
          console.log(error);
          this.message = error.error.error_description;
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        });
  }

  changetambon(tambonID) {
    this.addreszipcodeforselect.provinceid
    let Params = new HttpParams();
    Params = Params.append('tumbolid', tambonID);

    this.profileserice.changetumbol(Params)
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 100);
          console.log(data);
          this.zipcode = data['zipcode'];
          this.form.controls['postcode'].setValue(this.zipcode, { onlySelf: true });
          this.form.controls['postcode'].updateValueAndValidity();
        },
        error => {
          console.log(error);
          this.message = error.error.error_description;
          $('#message').modal({
            backdrop: 'static',
            keyboard: false,
            show: true
          });
        });
  }

  onprovincechange() {
    this.show = true;
    this.tambonlist = [];
    this.changeprovince(this.form.controls.province.value.ProvinceID);
    this.form.controls['amphur'].reset();
    this.form.controls['postcode'].reset();
    this.form.controls['tambon'].reset();
    
  }

  onamphurchange() {
    this.changeumpur(this.form.controls.amphur.value.UmpurID);
  }

  ontambonchange() {
    this.show = false;
    this.changetambon(this.form.controls.tambon.value.TumbolID);
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }
  
  isFieldNotValid1(field: string) {
    return !this.formotp.get(field).valid && this.formotp.get(field).touched

  }

  ValidatorDisplayCss1(field: string) {
    return {
      'has-danger': this.isFieldNotValid1(field)
    };
  }
  isFieldNotValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched

  }

  ValidatorDisplayCss(field: string) {
    return {
      'has-danger': this.isFieldNotValid(field)
    };
  }

  ngOnDestroy() {
    // $('#otpprofile').modal('toggle');
  }
  print() {
    window.focus();
    window.print();
  }




}
