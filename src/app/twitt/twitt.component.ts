import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitt',
  templateUrl: './twitt.component.html',
  styleUrls: ['./twitt.component.css']
})
export class TwittComponent implements OnInit {

  

  imageArray  = [{
    name : "merriya Krishna",
    twitt_email : "@merriya_Krishna",
    image_path : "../../assets/rachel-maddow-people-in-tv-photo-u11.jpg",
    totalCount : 0,
    iLike : false
  },{
    name : "Petter",
    twitt_email : "@petter_02",
    image_path : "../../assets/rupert-murdoch-people-in-tv-photo-1.jpg",
    totalCount : 5,
    iLike : true
},{
    name : "Shafiq Khan",
    twitt_email : "@shafiq_khan",
    image_path : "../../assets/tony-gaskins-jr-all-people-photo-u1.jpg",
    totalCount : 3,
    iLike : false
  }]

  constructor() { }

  ngOnInit() {
  }

}
