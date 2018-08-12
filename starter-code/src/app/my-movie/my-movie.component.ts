import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})

export class MyMovieComponent implements OnInit {

  constructor(private router: Router, public _movieService: MovieService) { }

  public movies: Array<object>;

  ngOnInit() {
    this.movies = this._movieService.getMovies();
  }

  goToHome() {
    this.router.navigate(['/home']);  // <!-- Programmatically navigate to home
  }

  viewDetails(id) {
    console.log(id)
    this.router.navigate(['movie', id]);
  }
}
