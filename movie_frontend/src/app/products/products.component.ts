import { Component, inject } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private httpClient:HttpClient){}
allMovies:Movie[] = []
getAllMovies(){
  return this.httpClient.get<Movie[]>('http://localhost:3000/movies/all')
}
ngOnInit(){
  this.getAllMovies().subscribe((data)=>{this.allMovies=data})
}
  searchText:string=''
 searchByName:boolean=false
 searchByDescription:boolean=false
search(){
  if(this.searchText.trim()!=='' &&this.searchText!== undefined){
  this.httpClient.get<Movie[]>('http://localhost:3000/movies/search?name='+ this.searchText).subscribe((data)=>{
    this.allMovies=data;
  })
  }
  }
}
