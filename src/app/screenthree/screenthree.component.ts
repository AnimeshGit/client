import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-screenthree',
  templateUrl: './screenthree.component.html',
  styleUrls: ['./screenthree.component.css']
})

export class ScreenthreeComponent implements OnInit {

  id: number;
  sub:any;  
  balance:any;
  AvailBal:any=[];
  amount:any;
  total:number;
  amtArray:any;

  constructor(private router: Router, private common_service: CommonService) { }

  ngOnInit() {

    this.common_service.getAvailBalance(localStorage.getItem("userId"))
    .subscribe(response => {
      console.log(response)
      if (response.success == true) {
        this.AvailBal = response.data ;
        this.balance = this.AvailBal.balance;
        this.amount = localStorage.getItem("amount");
        console.log(this.amount)
        swal({
          position: 'center',
          type: 'success',
          title: response.msg,
          showConfirmButton: false,
          timer: 1500
        })        
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

    $("#btn").click(function() {
      makeChange($("#amt").val());
    });

    function makeChange(total) {
      var amtArray = [2000, 500, 100];
        $("span").each(function(i) {
            //Set the span
            $(this).text(Math.floor( total / amtArray[i] ));
            //Get the new total
            total = total % amtArray[i];
        });
    }
  }
}
