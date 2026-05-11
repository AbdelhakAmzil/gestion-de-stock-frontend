import { Component, OnInit } from '@angular/core';
import { EntrepriseDto } from '../../../gs-api/src/models/entreprise-dto';
import { EntrepriseService } from '../../services/entreprise/entreprise.service';
import { AdresseDto } from '../../../gs-api/src/models/adresse-dto';
import { UserService } from '../../services/user/user.service';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-inscription',
  standalone: false,
  templateUrl: './page-inscription.html',
  styleUrls: ['./page-inscription.css'],
})
export class PageInscription implements OnInit {
  entrepriseDto: EntrepriseDto = {};
  adresse: AdresseDto = {};
  errorsMsg: Array<string> = [];
  confirmPassword: string = ''; // ✅ champ séparé pour confirmation

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  inscrire(): void {
    // ✅ Validation confirmation mot de passe
    if (!this.entrepriseDto.password) {
      this.errorsMsg = ['Le mot de passe est obligatoire'];
      return;
    }
    if (this.entrepriseDto.password !== this.confirmPassword) {
      this.errorsMsg = ['Les mots de passe ne correspondent pas'];
      return;
    }

    this.errorsMsg = [];
    this.entrepriseDto.adresse = this.adresse;
    this.entrepriseService.sinscrire(this.entrepriseDto).subscribe(
      (entrepriseDto) => {
        this.connectEntreprise();
      },
      (error) => {
        this.errorsMsg = error.error.errors ?? ['Une erreur est survenue'];
      },
    );
  }

  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      //password: 'som3R@nd0mP@$$word',  // ✅ intentionnel — backend génère ce mot de
      password: this.entrepriseDto.password as string, // ✅ mot de passe réel
    };
    this.userService.login(authenticationRequest).subscribe((response) => {
      this.userService.setAccessToken(response);
      this.router.navigate(['dashboard']);
      //this.getUserByEmail(authenticationRequest.login);
      //localStorage.setItem('origin', 'inscription');
      //this.router.navigate(['changermotdepasse']);
    });
  }

  getUserByEmail(email?: string): void {
    this.userService.getUserByEmail(email).subscribe((user) => {
      this.userService.setConnectedUser(user);
    });
  }
}
