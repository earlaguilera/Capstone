import { Component, OnInit } from '@angular/core';
import { AllusersService } from '../../services/allusers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilitator-dashboard-students',
  templateUrl: './facilitator-dashboard-students.component.html',
  styleUrls: ['./facilitator-dashboard-students.component.css']
})
export class FacilitatorDashboardStudentsComponent implements OnInit {

  users: Array<any>;

  constructor(private userService:AllusersService, 
    private router:Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res=>{
      this.users=res;
    },
    err=>{
      //console.log(err);
      return false;
    });
  }
}
