import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myResult: any;
  formData: any = {
    id: '0',
    tel: '',
    email: '',
    content: '',
    dated: new Date()
  }
  constructor(private _ContactService:ContactService) { }

  ngOnInit() {
  }
  created(){
    this._ContactService.create(this.formData)
    .then(response=>{
      console.log('Thêm thành công',response);
    },error=>{
      console.error('Lỗi',error);
    })
  }
}
