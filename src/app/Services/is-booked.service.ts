import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsBookedService {

  constructor() { }
  
  isBooked = signal(false)
  markAsBooked() {
    this.isBooked.set(true);

  }
}
