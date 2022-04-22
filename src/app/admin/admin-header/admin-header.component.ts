import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
userName:string=""
  constructor() { }

  ngOnInit(): void {
    this.userName=localStorage.getItem("userName") as string
  }

}
