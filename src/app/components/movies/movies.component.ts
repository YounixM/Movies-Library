import { Component, OnInit } from '@angular/core';
import { moviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _moviesService: moviesService, private router: Router) { }

  movies = [];
  searchText: String = null;

  ngOnInit() {
    if (this._moviesService.Movies.length == 0) {
      this._moviesService.getmovies().subscribe(res => {
        this.movies = res;
      })
    } else {
      this.movies = this._moviesService.Movies;
    }
  }

  movieDetails(movie) {
    this._moviesService.selectedMovie = movie;
    this.router.navigate(['/movie']);
  }

  searchMovie() {
    if (this.searchText && this.searchText != "") {
      this.movies = this._moviesService.Movies;
      let movies = this.movies.filter(movie => movie.movie_title.toLowerCase().includes(this.searchText.toLowerCase()));
      this.movies = movies;
    } else {
      this.movies = this._moviesService.Movies;
    }
  }

  reset() {
    this.movies = this._moviesService.Movies;
  }

  sortBy(sortBy) {
    if (sortBy == 'release_year') {
      this.movies.sort(this.compare);
    }
  }

  compare(a,b) {
    if (parseInt(a.release_year) < parseInt(b.release_year))
      return -1;
    if (parseInt(a.release_year) > parseInt(b.release_year))
      return 1;
    return 0;
  }

}
