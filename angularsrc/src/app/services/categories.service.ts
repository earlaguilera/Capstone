import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoriesService {
  categorytotransfer;

  result:any;

  constructor(private http:Http) { }

  getCategories() {
    return this.http.get("/categories/categories")
      .map(result => this.result = result.json());
  }

  editCategory(id){
    return this.http.get('/categories/categories/'+id)
    .map(result=>this.result=result.json());
  }

  updateCategory(cat){
    return this.http.put('/categories/categories/'+cat._id,cat)
    .map(result=>this.result=result.json());
  }

  addCategory(cat){
    return this.http.post('/categories/categories', cat)
    .map(result=>this.result=result.json());
  }

  deleteCategory(id){
    return this.http.delete('/categories/categories/'+id)
    .map(result=>this.result=result.json());
  }

}
