import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@Servives/users.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  rows:any = [];

  constructor(private userService: UsersService) {
    this.fill();
   }

  ngOnInit(): void {
  }

  fill(): void{
    this.userService.getUsers().subscribe(
      data => {
        this.rows = data;
        console.log(data);

      }
    );
  }
}
