import { Component, OnInit } from '@angular/core';
import {  CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilitator-dashboard-categories',
  templateUrl: './facilitator-dashboard-categories.component.html',
  styleUrls: ['./facilitator-dashboard-categories.component.css']
})

export class FacilitatorDashboardCategoriesComponent implements OnInit {

  categories: Array<any>;
  cat:any;

  constructor(private catService:CategoriesService,
    private router:Router) { }

  ngOnInit() {
    this.cat="";
    this.catService.getCategories().subscribe(res=>{
      this.categories=res;
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

  editCategory(id){
    console.log("inside edit category, the id is: "+id);
    this.catService.editCategory(id).subscribe(res=>{
      this.cat=res;
    },
    err=>{
      //console.log(err);
      return false;
    });
  }
}
