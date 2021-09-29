import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser=""

  currentAcc=""

  users: any = {
    1000: { accno: 1000, username: "Aahil", password: "userone", balance: 5000,transaction:[] },
    1001: { accno: 1001, username: "Bahit", password: "usertwo", balance: 7000,transaction:[] },
    1002: { accno: 1002, username: "Cahit", password: "userthree", balance: 6000,transaction:[] },
    1003: { accno: 1003, username: "Dahit", password: "userfour", balance: 4000 ,transaction:[]}
  }

  constructor(private http:HttpClient) {
    // this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))

     if(this.currentUser){

      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))

     }
     if(this.currentAcc){

      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))

     }
    
  }

  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse (localStorage.getItem("users")|| '')
    }
    if(localStorage.getItem("currentUser")){
   this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
  if(localStorage.getItem("currentAcc")){
    this.currentAcc=JSON.parse(localStorage.getItem("currentAcc")||'')
   }
  
}
getTransaction(acno:any){
  const data ={
    acno
  }
  return  this.http.post("http://localhost:3000/getTransaction",data,options)
}

  register(accno: any, username: any, password: any) {

const data={
  accno,
  username,
  password
}

  return  this.http.post("http://localhost:3000/register",data)
  
  //   let accdetails = this.users
  //   if (accno in accdetails) {    
  //     return false;
  //   }
  //   else {
  //     accdetails[accno] = {
  //       accno,
  //       username,
  //       password,
  //       balance: 0,
  //       transition:[]
  //     }
  //     //console.log(accdetails);
  //     //console.log(this.users);  
  //     this.saveDetails()
  //     return true
  //   }
   }
  login(acno:any,pswd:any){

    const data ={
      acno,
      pswd
    }


    return  this.http.post("http://localhost:3000/login",data,options)
    // let accdetails=this.users
    // if(acno in accdetails){
    //   if(pswd == accdetails[acno]["password"]){
    //     this.currentUser = accdetails[acno]["username"]
    //     this.currentAcc = acno
    //     this.saveDetails()
    //     return true
        
    //   }
    //   else{
    //     alert("invalid password")
    //     return false
    //   }
    // }
    //   else{
    //     alert("invalid account number")   
    //     return false   
    // }
  }
  
  deposit(acno:any,pswd:any,amount:any){

    const data ={
      acno,
      pswd,
      amount
    }


    return  this.http.post("http://localhost:3000/deposit",data,options)



    // let accdetails = this.users
    // var amt = parseInt(amount)
    // if(acno in accdetails){
    //   if(pswd == accdetails[acno]["password"]){
    //     accdetails[acno]["balance"]+=amt
    //     accdetails[acno].transaction.push(
    //       {
    //         amount:amt,
    //         type:"CREDIT"
    //       }
    //     )
    //     this.saveDetails()
    //     return accdetails[acno]["balance"]
    //   }
    //   else{
    //     alert("invalid password")
    //     return false
    //   }
    // }
    // else{
    //   alert("invalid account number")
    //   return false
    // }
  }
  withdraw(acno:any,pswd:any,amount:any){
    const data ={
      acno,
      pswd,
      amount
    }


    return  this.http.post("http://localhost:3000/withdraw",data,options)
//     let accdetails = this.users
//     var amt = parseInt(amount)
//     if(acno in accdetails){
//       if(pswd == accdetails[acno]["password"]){
//         if(accdetails[acno]["balance"]>amt){
//         accdetails[acno]["balance"]-=amt
//         accdetails[acno].transaction.push(
//           {
//             amount:amt,
//             type:"DEBIT"
//           }
//         )
//         this.saveDetails()
//         return accdetails[acno]["balance"]
//       }
//       else{
//         alert("insufficient balance")
//         return false
//       }
//     }
//     else{
//       alert("invalid password")
//       return false
//     }
//   }
//   else{
//     alert("invalid account number")
//     return false
//   }
 }
 deleteAcc(acno:any){
return this.http.delete("http://localhost:3000/deleteAcc/"+acno,options)
 }
}