import { Component, OnInit } from '@angular/core';
import { moviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _moviesService : moviesService, private router : Router) { }

  movie : any = null;

  ngOnInit() {
    if(this._moviesService.selectedMovie){
      this.movie = this._moviesService.selectedMovie;
    }else{
      this.router.navigate(['/movies']);
    }

  }

}
