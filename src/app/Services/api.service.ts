import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seats } from '../Models/seat';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getStations(){
    return this.http.get('https://railway.stepprojects.ge/api/stations')
  }

  getDeparture(from : string, to : string, date : string){
    return this.http.get(`https://railway.stepprojects.ge/api/getdeparture?from=${from}&to=${to}&date=${date}`)
  }

  getVagon(id : number){
    return this.http.get(`https://railway.stepprojects.ge/api/getvagon/${id}`)
  }
  postSeats(obj : Post){
    return this.http.post(`https://railway.stepprojects.ge/api/tickets/register`, obj, {responseType: 'text'})
  }
  
   deleteSeats(id ?: string ){
    return this.http.delete(`https://railway.stepprojects.ge/api/tickets/cancel/${id}`, {responseType: 'text'})
  }
}
