import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})

export class AddImageComponent implements OnInit {

  addImage: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) { }

  checkValue() {
    const inputValue = document.querySelectorAll('.input-text');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < inputValue.length; i++) {
      if ((inputValue[i] as HTMLInputElement).value.trim() !== '') {
        inputValue[i].classList.add('has-val');
      } else {
        inputValue[i].classList.remove('has-val');
      }
    }
  }

  buildForm() {
    this.addImage = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      url: ['', [
        Validators.required,
        Validators.pattern('^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&"\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$')
      ]],
    });
  }

  addImg() {
    const newMessage = this.addImage.value;
    console.log(newMessage);
    this.addImage.reset();
    this.checkValue();
  }

  ngOnInit() {
  }

}
