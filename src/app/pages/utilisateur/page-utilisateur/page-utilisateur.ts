import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  standalone: false,
  templateUrl: './page-utilisateur.html',
  styleUrls: ['./page-utilisateur.css'],
})
export class PageUtilisateur implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  nouvelUtilosateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }
}
