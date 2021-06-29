import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  
  constructor() { 
    var channelArray: string = "marceloocabado";
    console.log(channelArray.includes('v'));
  }

  ngOnInit(): void {
  }

}
