import { Component, Inject, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(@Inject(StatusService) private status:any) {
    localStorage.removeItem("auth");
    this.status.logged=false;
    alert("User logged out");
   }

  ngOnInit(): void {
  }
}