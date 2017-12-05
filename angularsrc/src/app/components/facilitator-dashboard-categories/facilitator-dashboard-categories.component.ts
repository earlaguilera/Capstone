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
  cat:any='';

  constructor(private catService:CategoriesService,
    private router:Router) { }

  ngOnInit() {
    this.catService.getCategories().subscribe(res=>{
      this.categories=res;
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

  editCategory(id){
    //console.log("inside edit category, the id is: "+id);
    this.catService.editCategory(id).subscribe(res=>{
      this.cat=res;
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

  updateCategory(cat){
    this.catService.updateCategory(cat).subscribe(res=>{
      this.cat='';
      this.ngOnInit();
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

  //add category is ghetto rigged, could not figure out a way to pull values directly from ngModel
  addCategory(){
    var namer=(<HTMLInputElement>document.getElementById('name')).value;
    var desc=(<HTMLInputElement>document.getElementById('desc')).value;
    var tasks=(<HTMLInputElement>document.getElementById('tasks')).value;

    var caty={
      name:namer,
      description:desc,
      numtasks:tasks
    };

    this.catService.addCategory(caty).subscribe(res=>{
      (<HTMLInputElement>document.getElementById('name')).value="";
      (<HTMLInputElement>document.getElementById('desc')).value="";
      (<HTMLInputElement>document.getElementById('tasks')).value="";
      this.cat=res;
      this.ngOnInit();
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

  cancel(){
    this.cat='';
    this.ngOnInit();
  }

  deleteCategory(id){
    this.catService.deleteCategory(id).subscribe(res=>{
      this.cat='';
      this.ngOnInit();
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

  addTask(id){
    this.catService.categorytotransfer=id;
    this.router.navigate(['/task-creator']);
  }
}
