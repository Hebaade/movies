import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../models/Category';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../../../models/Movie';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  categories:Category[]=[];
  movie:Movie=new Movie
  httpClient=inject(HttpClient);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router)
  ngOnInit(){
    this.httpClient.get<Category[]>('http://localhost:3000/categories/all').subscribe((data)=>{
      this.categories=data;
    })
  }
  addNewMovie(){
    this.httpClient.post<Movie>('http://localhost:3000/movies/add',this.movie).subscribe(()=>{this.router.navigate(['/movies'])});
  }
}
