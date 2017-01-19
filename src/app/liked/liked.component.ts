import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  @Input() totalLikes : number= 0;
  @Input() iLike : boolean = false;
  constructor() { }

  onClick(){
    this.iLike = !this.iLike; 
    this.totalLikes += this.iLike ? 1 : -1;
  }
  ngOnInit() {
  }

}
