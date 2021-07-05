import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@service/users.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

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
