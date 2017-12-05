import { Component, OnInit } from '@angular/core';
import {  CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-taskcreator',
  templateUrl: './taskcreator.component.html',
  styleUrls: ['./taskcreator.component.css']
})
export class TaskcreatorComponent implements OnInit {
cat:any='';

  constructor(private catService:CategoriesService) {
    this.editCategory();
   }

  ngOnInit() {
  }

  editCategory(){
    //console.log("inside edit category, the id is: "+id);
    this.catService.editCategory(this.catService.categorytotransfer).subscribe(res=>{
      this.cat=res;
    },
    err=>{
      //console.log(err);
      return false;
    });
  }

}
