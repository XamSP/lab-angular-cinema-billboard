import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit { 
  public movieId: Number;
  public theMovie: Object;  
  
  constructor(private route: ActivatedRoute, private router: Router, public _movieService: MovieService) { }

  ngOnInit() {
    console.log(Number(this.route.snapshot.params['id']));
    
    this.movieId = Number(this.route.snapshot.params['id']);
  
    this.theMovie = this._movieService.getMovie(this.movieId);
  }

  goToHome() {
    this.router.navigate(['/home']);  // <!-- Programmatically navigate to home
  }
}
