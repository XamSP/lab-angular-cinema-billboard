import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToMovie() {
    this.router.navigate(['/movie']);  // <!-- Programmatically navigate to home
  }
}
