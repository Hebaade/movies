import { Component, inject } from '@angular/core';
import { Category } from '../../../../models/Category';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {
  category:Category=new Category;
  categoryID:any;
  httpClient=inject(HttpClient)
  activatedRoute=inject(ActivatedRoute)
  router=inject(Router)
  ngOnInit(){
    this.categoryID=this.activatedRoute.snapshot.params['id']
    this.httpClient.get<Category>('http://localhost:3000/categories/category/'+this.categoryID).subscribe((data)=>{
      this.category=data;
    })
  }
  onSubmit(){
    this.httpClient.put('http://localhost:3000/categories/update/'+this.categoryID,this.category).subscribe(()=>{
      this.router.navigate(['/categories'])
    })
  }
}
