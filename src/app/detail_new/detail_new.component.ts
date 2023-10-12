import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../service/feedbacks.service';
@Component({
  selector: 'app-detail_new',
  templateUrl: './detail_new.component.html',
  styleUrls: ['./detail_new.component.scss']
})
export class Detail_newComponent implements OnInit {

    myResult:any;
    formData:any={
      id:'0',
      name: '',
      email: '',
      content: '',
      dated: new Date()
    };
  constructor(private _feedbackService: FeedbacksService) { }

  ngOnInit() {
    // this.getData();
  }

  // getData(){
  //   this._feedbackService.getData()
  //   .then((result:any)=>{
  //     this.myResult=result;
  //     console.log(this.myResult);
  //   })
  // }

  create(){
    this._feedbackService.create(this.formData)
    .then(response=>{
      console.log('Thêm bản ghi thành công',response);
 //   this.getData();
    },error=>{
      console.error('Lỗi',error);
    })
  }
}
