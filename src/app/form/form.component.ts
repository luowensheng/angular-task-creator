import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from '../appointment/appointment.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitIt: (taskForm:any) => void;
  @Output() submitEvent = new EventEmitter<Appointment>();
  taskInput: string = "";
  checkbox: any = {checked:false};
  dateInput: string = "";
  
  constructor() {

    this.submitIt = (taskForm)=>{
      const {taskInput, dateInput} = taskForm.form.controls;
      console.log(`for values name=${taskInput.value}  date=${dateInput.value}`)
      this.submitEvent.emit(new Appointment(taskInput.value, dateInput.value))
      this.clearInput();
    };
   
  }

  private clearInput(){
    this.taskInput= "";
    console.log("fdsafdsfd  ", this.checkbox)
    this.checkbox.checked = false;
    this.dateInput= "";
  }

  ngOnInit(): void {
  }

  buttonClicked(event:Event){
    event.preventDefault();
    console.log(event);
  }
  log(x:any){
    console.log(x);
  }
  submit(taskForm:NgForm){
    this.submitIt(taskForm);
  }

}
