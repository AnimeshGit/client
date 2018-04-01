import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.css'],
  providers: [CommonService]

})
export class ScreentwoComponent implements OnInit {
  amount:any;
  cardId:any;
  constructor(private router: Router, private common_service: CommonService) { }

  fetchAmount(){
    const params1 = {
      amount: this.amount,
      cardId : localStorage.getItem("userId")
    }
    this.common_service.withdrawAmount(params1)
      .subscribe(response => {
        console.log(response)
        if (response.success == true) {
          localStorage.setItem("amount",this.amount);
          swal({
            position: 'center',
            type: 'success',
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl('/screenthree');
        } else {
          swal({
            position: 'center',
            type: 'error',
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
          })
        }
      },
      
      (err) => {
        swal({
          position: 'center',
          type: 'error',
          title: 'Something Went Wrong',
          showConfirmButton: false,
          timer: 1500
        })

      });

  }

  ngOnInit() {
  }

}
