import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment/appointment.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  appointments: Appointment[] = [
    new Appointment("Doctors Appointment", "March 5th at 2:30pm"),
  ];  
  
  constructor() { 
  }

  getAppointments(){
    return this.appointments;
  }
  
  setAppointment(appointment:Appointment){
    console.log(`Received`)
    console.log(appointment);
    this.appointments.push(appointment);
  }

  ngOnInit(): void {
  }


}
