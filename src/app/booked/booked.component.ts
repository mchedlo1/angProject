import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seats } from '../Models/seat';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-booked',
  imports: [FormsModule, CommonModule],
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.scss'
})
export class BookedComponent {

  constructor(private api : ApiService) { }

  bookedSeats: any[] = JSON.parse(localStorage.getItem('POST') || '[]');

  delete(id : string){

    this.api.deleteSeats(id).subscribe((resp : any) => {
      console.log(resp);
    })

  }
}
