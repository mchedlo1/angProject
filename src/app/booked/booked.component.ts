import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seats } from '../Models/seat';
import { ApiService } from '../Services/api.service';
import { SeatComponent } from "../seat/seat.component";

@Component({
  selector: 'app-booked',
  imports: [FormsModule, CommonModule, SeatComponent],
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.scss'
})
export class BookedComponent {

  constructor(private api : ApiService) { }

  bookedTkt = ""
  bookedSeats : Seats[] = [];
  isBookedSeats = false

  ngOnInit() {
    if (localStorage.getItem('bookedTkt')) {
      //this.bookedSeats = JSON.parse(localStorage.getItem('BOOKEDSEATS') || '[]');
      this.isBookedSeats = true
      this.bookedTkt = localStorage.getItem('bookedTkt') || ""
    }
    else{
      //this.bookedSeats = [];
      this.isBookedSeats = false
    }
  }

  el : any

  deleteTkt(){
        localStorage.removeItem('bookedTkt')
        
        this.api.deleteSeats(this.bookedTkt).subscribe((resp : any) => {
          alert(`Seat ${this.bookedTkt} Was Deleted Successfully`);
      console.log(resp);
      
      
    })
  }

  // delete(id ?: string ){

    
  //     console.log(id)
  //   localStorage.removeItem('BOOKEDSEATS');
  //   this.api.deleteSeats(id).subscribe((resp : any) => {
  //     console.log(resp);
  //   })
  //   this.bookedSeats.splice(this.bookedSeats.indexOf(this.el), 1);
  //   console.log(this.bookedSeats);
  //   alert(`Seat ${id} Was Deleted Successfully`);
  //   this.isBookedSeats = false

  // }
}

