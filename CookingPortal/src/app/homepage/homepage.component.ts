// import { Component, Inject, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { StatusService } from '../status.service';

// @Component({
//   selector: 'app-homepage',
//   templateUrl: './homepage.component.html',
//   styleUrls: ['./homepage.component.css']
// })
// export class HomepageComponent implements OnInit {
//   title = 'CookingPortal';

//   constructor(@Inject(StatusService) public status:any, @Inject(Router) private rt:any) { }

//   username:any;
//   ngOnInit(): void {
//     if (localStorage.getItem("username"))
//       this.username=localStorage.getItem("username");
//   }

// }

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title = 'CookingPortal';
  username: any;

  constructor(
    @Inject(StatusService) public status: any,
    @Inject(Router) private rt: any
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
  }
}
