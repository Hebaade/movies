import { Component, inject } from '@angular/core';
import { Category } from '../../../models/Category';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
categories:Category[]=[];
httpClient=inject(HttpClient)
ngOnInit(){
  this.httpClient.get<Category[]>('http://localhost:3000/categories/all').subscribe((data)=>{
    this.categories=data;
  })
}
deleteCategory(catId:any){
this.httpClient.delete<Category>('http://localhost:3000/categories/delete/'+catId)
}
searchText:string=''
notFoundDisplay:boolean=false
search(){
if(this.searchText.trim()!=='' &&this.searchText!== undefined){
this.httpClient.get<Category[]>('http://localhost:3000/categories/search?name='+ this.searchText).subscribe((data)=>{
  this.categories=data;
})
}
}
}
