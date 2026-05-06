import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  standalone: false,
  templateUrl: './nouvel-utilisateur.html',
  styleUrls: ['./nouvel-utilisateur.css'],
})
export class NouvelUtilisateur implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }
}
