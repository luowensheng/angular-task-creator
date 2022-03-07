import { Component, Input, OnInit } from '@angular/core';

export class Appointment {
  name : string;
  date : string;
  constructor(name:string, date:string){
    this.name = name;
    this.date = date;
  }
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  @Input() appointment:any;


  constructor(){
    // this.appointment = new Appointment(this.appointmentName, this.appointmentDate);
  }

  ngOnInit(): void {
  }


}
