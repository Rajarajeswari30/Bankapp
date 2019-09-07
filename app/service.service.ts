import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map"
import "rxjs/Rx"
@Injectable({
 providedIn: 'root'
})
export class ServiceService {
API1='https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';
API2='https://vast-shore-74260.herokuapp.com/banks?city=DELHI';
API3='https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA';
API4='https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE';
API5='https://vast-shore-74260.herokuapp.com/banks?city=CUTTACK';
constructor(private http:HttpClient) { }
 mumbaibank(data){
   let body1={
     bankname: data.bankname,
     ifsc: data.ifsc,
     bankid: data.bankid,
     branch: data.branch
   }
   return this.http.post(this.API1, body1).map(data =>{
     console.log("3",data)
   })
 }
 delhibank(data){
   let body2={
     bankname: data.bankname,
     ifsc: data.ifsc,
     bankid: data.bankid,
     branch: data.branch
   }
   return this.http.post(this.API2,body2).map(data =>{
     console.log("6",data)
   })
 }
 kolkatabank(data){
   let body2={
     bankname: data.bankname,
     ifsc: data.ifsc,
     bankid: data.bankid,
     branch: data.branch
   }
   return this.http.post(this.API3,body2).map(data =>{
     console.log("6",data)
   })
 }
 banglorebank(data){
   let body2={
     bankname: data.bankname,
     ifsc: data.ifsc,
     bankid: data.bankid,
     branch: data.branch
   }
   return this.http.post(this.API4,body2).map(data =>{
     console.log("6",data)
   })
 }
 cuttackbank(data){
   let body2={
     bankname: data.bankname,
     ifsc: data.ifsc,
     bankid: data.bankid,
     branch: data.branch
   }
   return this.http.post(this.API5,body2).map(data =>{
     console.log("6",data)
   })
 }
}
