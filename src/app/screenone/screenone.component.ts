import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-screenone',
  templateUrl: './screenone.component.html',
  styleUrls: ['./screenone.component.css'],
  providers: [CommonService]
})

export class ScreenoneComponent implements OnInit {
  card_number:any;
  pin:any;

  constructor(private router: Router, private common_service: CommonService) { }
 
  fetchDetails(){
    const params = {
      card_number: this.card_number,
      pin: this.pin
    }
    this.common_service.getCards(params)
      .subscribe(response => {
        console.log(response)
        if (response.success == true) {
          window.localStorage.setItem("userId",response.data._id);
          swal({
            position: 'center',
            type: 'success',
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
          })        
          this.router.navigateByUrl('/screentwo');
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
