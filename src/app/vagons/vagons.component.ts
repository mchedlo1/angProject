import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { Vagons } from '../Models/vagon';
import { CommonModule } from '@angular/common';
import { SeatComponent } from "../seat/seat.component";
import { ButtonBckComponent } from "../button-bck/button-bck.component";
import { Seats } from '../Models/seat';
import { User } from '../Models/user';
import { Post } from '../Models/post';
import { IsBookedService } from '../Services/is-booked.service';
@Component({
  selector: 'app-vagons',
  imports: [RouterModule, CommonModule, SeatComponent, ButtonBckComponent],
  templateUrl: './vagons.component.html',
  styleUrl: './vagons.component.scss'
})

export class VagonsComponent {



  
  id !: number

  constructor(private route : ActivatedRoute, private api : ApiService, private book : IsBookedService){
    this.route.params.subscribe(ramp => this.id = ramp['id'])
    this.route.params.subscribe(ramp => this.date = ramp['date'])
    //console.log(this.id)
  }

  date = ""
  price ? : number
  totalPrice ?: number
  vagon : Vagons = new Vagons
  chosenSeats : Seats[] = []
  bookedSeats : Seats[] = []
  

  ngOnInit(){
    
    this.api.getVagon(this.id).subscribe((resp : any) => {
      this.vagon = resp[0]
      console.log(this.vagon)
      if(this.vagon.seats){
        this.price =this.vagon.seats[0].price
      }
      else{
        console.log("error")
      }
    })
    
    
  }

  userSignUp ?: boolean
  user : User | any
  post : Post = new Post

  deletes(){
          this.api.deleteSeats('s').subscribe((resp : any) => {
            console.log(resp)
            alert(resp)
          })
        }

  ok(){
    //console.log(this.chosenSeats)
    
    
    
    // if(localStorage.getItem('USER_SIGNUP')){

    //   this.user = JSON.parse(localStorage.getItem('USER') || "")
    //   console.log(this.user)

    //   this.bookedSeats = this.chosenSeats
    //   //console.log(this.bookedSeats)

    //   localStorage.setItem('SEATS', JSON.stringify(this.bookedSeats, null, 2));
    //   localStorage.setItem('VAGON', JSON.stringify(this.vagon, null, 2));

    //   this.post.trainId = this.vagon.trainId
    //   this.post.phoneNumber = this.user.phoneNumber
    //   this.post.email = this.user.email
    //   this.post.date = this.date
    //   this.post.people.push(JSON.parse(localStorage.getItem('selectedSeats') || ""))
                                                    
    //   console.log(this.post)
    //     this.api.postSeats(this.post).subscribe((resp : any) => {
    //       console.log(resp)   
         
    //         alert(resp)
    //         localStorage.removeItem('selectedSeats')
    //         //localStorage.removeItem('USER_SIGNUP')
    //         //localStorage.removeItem('USER')
    //         localStorage.removeItem('VAGON')
    //         localStorage.removeItem('SEATS')
       
    //     })
      
    // }
    if(localStorage.getItem('USER_SIGNUP')){

      this.user = JSON.parse(localStorage.getItem('USER') || "")
      console.log(this.user)

      this.bookedSeats = this.chosenSeats

      this.post.trainId = this.vagon.trainId
      this.post.phoneNumber = this.user.phoneNumber1.toString()
      this.post.email = this.user.email
      this.post.date = this.date
      this.post.people = this.bookedSeats.map(seat => ({
        seatId: seat.seatId || "",
        name: this.user.Name,
        surame: this.user.lastName,
        idNumber: this.user.idNumber.toString(),
        status: "booked",
        payoutCompleted : true
      }))  
      

        console.log(this.post)
        localStorage.setItem('POST', JSON.stringify(this.post, null, 2));
        this.api.postSeats(this.post).subscribe((resp : any) => {
          console.log(resp)
         
            alert(resp)
            localStorage.removeItem('selectedSeats')
            //localStorage.removeItem('USER_SIGNUP')
            //localStorage.removeItem('USER')
            localStorage.removeItem('VAGON')
            localStorage.removeItem('SEATS')
            //console.log(this.post.people)
            //console.log(this.bookedSeats)
            //this.book.markAsBooked()
            //console.log(this.book.isBooked())
            this.bookedSeats.forEach(seat => {
              this.vagon.seats?.splice(this.vagon.seats?.findIndex(s => s.seatId === seat.seatId), 1);
            })
            localStorage.setItem('BOOKEDSEATS', JSON.stringify(this.bookedSeats, null, 2));
        })
        
    }   
    else{
      alert("Please sign up first")
      
    }
    if(this.price){
      this.totalPrice = this.price*this.chosenSeats.length
      console.log(this.totalPrice)
       console.log(this.price)
      }
    else{
      console.log("error")
      console.log(this.price)
    }
  }


}
