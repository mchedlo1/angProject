import { Component, Input, signal } from '@angular/core';
import { Vagons } from '../Models/vagon';
import { Seats } from '../Models/seat';
import { IsBookedService } from '../Services/is-booked.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat',
  imports: [CommonModule],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.scss'
})
export class SeatComponent {

  constructor(public book : IsBookedService){}

  @Input() seat : Seats = new Seats
  @Input() chosenSeatsArr : Seats[] = []

  isBooked = false
  ngOnInit(){
    if(this.seat.isOccupied == true){
      this.bck = "background-color: red;"
      console.log("This seat is already booked")
      this.isBooked = true
    }
  }

  
  
  clickCounter1 = 1
  bck = "background-color:darkseagreen;"
  printSeat(el ?: string){
    
    console.log(this.book.isBooked())

    if(this.bck == "background-color: red;"){

    }
    else{

      this.clickCounter1++
    
    if(this.clickCounter1 % 2 == 0){
    //console.log(el, "ADDED")
    this.bck = "background-color: white; color: black;"
    this.chosenSeatsArr.push(this.seat)
    //console.log(this.chosenSeatsArr)

    }
    else if(this.clickCounter1 % 2 == 1){
      //console.log(el ,"REMOVED")
      this.bck = "background-color:darkseagreen;"
      this.chosenSeatsArr.splice(this.chosenSeatsArr.indexOf(this.seat), 1)
      //console.log(this.chosenSeatsArr)

    }

    }
    
    // else if(this.book.isBooked() == true){

    //   this.bck = "background-color: red;"
    //   //console.log("This seat is already booked")
    //   console.log("This seat is already booked")
    // }
    // else if(this.seat.isOccupied == true){
    //   this.bck = "background-color: red;"
    // }
    localStorage.setItem('selectedSeats', JSON.stringify(this.chosenSeatsArr))

  }

}
