import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';

// call simple api
   data:any =[]
  constructor(private user: UsersDataService) {
    this.user.getData().subscribe(data => {
      console.log(data)
      this.data = data
    })
  }




  // services

  // name=""
  // constructor(private user:UsersDataService) {
    // console.log(this.user.getData())
    // let data = this.user.getData()
    // this.name = data.name
  // }

    // event
  
  // currentval = ""

  // getval(val: any) {
  //   console.log('val')
  //   this.currentval = val
  // }

  //  interpoletion vs property binding

  // name = "Shubh"

  // disabledBox = true

  // enableBox() {
  //   this.disabledBox = false
  // }

  // if else conditions

  // show = true

  // show = "yellow"

  //  switch case

  // color= "blue"

     // for loop in angular

  // data = [
  //   {
  //     name: 'shubh',
  //     age: 23,
  //     email:"shubh@gmail.com"
  //   },
  //   {
  //     name: 'bruce',
  //     age : 24,
  //     email:"shubh@gmail.com"
  //   },
  //   {
  //     name: ' peter',
  //     age :  26,
  //     email:"shubh@gmail.com"
  //   }
  // ]
        // NG FORM
  // getUserValue(value: any) {
  //   console.log(value)
  // }

      // style binding
  
  // color = "blue"

  // err = true
  
  // updateColor() {
  //   this.color = "orange"
  // }
  
  // cparent to child component

  // data = {
  //   name: 'bruce',
  //   age: 25
  // }

  // resuable component

  // users = [
  //   {
  //     name: 'bruce',
  //     age: 25,
  //     addr: 'akola'
  //   },
  //   {
  //     name: 'peter',
  //     age: 23,
  //     addr: 'nashik'
  //   },
  //   {
  //     name: 'clark',
  //     age: 30,
  //     addr: 'delhi'
  //   },
  // ]

    // child to parent component

  //     data: any
  // parentComponent(data:any) {
    
  //   this.data=data
  //   }

// pipes
  // name = "shUbhAm jaIN"
  // today = Date.now()
  // str = "Hello Angular"
  // val=10

  
}
