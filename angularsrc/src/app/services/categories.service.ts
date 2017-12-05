import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoriesService {

  result:any;

  constructor(private http:Http) { }

  getCategories() {
    return this.http.get("/categories/categories")
      .map(result => this.result = result.json());
  }

  editCategory(id){
    return this.http.get('categories/categories/'+id)
    .map(result=>this.result=result.json());
  }

}
