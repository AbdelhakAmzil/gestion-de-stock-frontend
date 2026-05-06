import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangerMotDePasseUtilisateurDto } from '../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: false,
  templateUrl: './changer-mot-de-passe.html',
  styleUrls: ['./changer-mot-de-passe.css'],
})
export class ChangerMotDePasse implements OnInit {
  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasseDto).subscribe((data) => {
      // rien faire
      this.router.navigate(['profil']);
    });
  }
}
