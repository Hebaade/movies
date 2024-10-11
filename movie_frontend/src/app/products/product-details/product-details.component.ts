import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Movie } from '../../../../models/Movie';
import { Category } from '../../../../models/Category';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  movieId:any;
  movie:Movie=new Movie;
  category:Category=new Category;
  httpClient=inject(HttpClient);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router)
  getMovie(){
  this.movieId=this.activatedRoute.snapshot.params['id']
    return this.httpClient.get<Movie>('http://localhost:3000/movies/movie/'+this.movieId)
  }
  getCategory(){
    return this.httpClient.get<Category>('http://localhost:3000/categories/category/'+this.movie.categoryId)
  }
  ngOnInit(){
    this.getMovie().subscribe((data)=>{
      this.movie=data; 
      this.getCategory().subscribe((data)=>{this.category=data});
    }
    )
  }
  goBack(){
    this.router.navigate(['movies'])
  }
  deleteMovie(){
    this.movieId=this.activatedRoute.snapshot.params['id']
    this.httpClient.delete<Movie>('http://localhost:3000/movies/delete/'+this.movieId).subscribe(()=>{
      this.router.navigate(['/movies'])
    });
  }
}
