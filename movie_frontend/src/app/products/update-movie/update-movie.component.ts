import { Component, inject } from '@angular/core';
import { Category } from '../../../../models/Category';
import { Movie } from '../../../../models/Movie';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent {
  categories:Category[]=[];
  movie:Movie=new Movie;
  movieId:any;
  httpClient=inject(HttpClient);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router)

  getMovie(){
    this.movieId=this.activatedRoute.snapshot.params['id']
      return this.httpClient.get<Movie>('http://localhost:3000/movies/movie/'+this.movieId)
    }
    getCategories(){
      return this.httpClient.get<Category[]>('http://localhost:3000/categories/all')
    }
    ngOnInit(){
      this.getMovie().subscribe((data)=>{
        this.movie=data; 
        this.getCategories().subscribe((data)=>{this.categories=data});
      }
      )
    }
    onSubmit() {
      this.httpClient
        .put(
          'http://localhost:3000/movies/update/' + this.movieId,
          this.movie
        )
        .subscribe(() => {
          this.router.navigate(['/movies']);
        });
    }
}
