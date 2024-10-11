import { Component, inject } from '@angular/core';
import { Category } from '../../../../models/Category';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
category:Category=new Category;
httpClient=inject(HttpClient);
router=inject(Router)
addNewCategory(){
  this.httpClient.post<Category>('http://localhost:3000/categories/add',this.category).subscribe(()=>{this.router.navigate(['/categories'])});
}
}
