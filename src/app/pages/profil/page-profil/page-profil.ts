import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  standalone: false,
  templateUrl: './page-profil.html',
  styleUrls: ['./page-profil.css'],
})
export class PageProfil implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }
}
