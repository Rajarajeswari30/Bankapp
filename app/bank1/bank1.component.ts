
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
 selector: 'app-bank1',
 templateUrl: './bank1.component.html',
 styleUrls: ['./bank1.component.css']
})
export class Bank1Component implements OnInit {
 banking: FormGroup

 constructor(public router:Router, private fb:FormBuilder, private http:ServiceService) {
this.banking = this.fb.group({
})
 }
 ngOnInit() {
 }
    open(data){
    }
      open1(data){
        console.log(data)
        this.http.mumbaibank(data).subscribe(data1 => {
          console.log("4", data1)
        })
}
open2(data){
 console.log(data)
 this.http.delhibank(data).subscribe(data1 => {
   console.log("4", data1)
 })
}
open3(data){
 console.log(data)
 this.http.kolkatabank(data).subscribe(data1 => {
   console.log("4", data1)
 })
}
open4(data){
 console.log(data)
 this.http.banglorebank(data).subscribe(data1 => {
   console.log("4", data1)
 })
}
open5(data){
 console.log(data)
 this.http.cuttackbank(data).subscribe(data1 => {
   console.log("4", data1)
 })
}
}