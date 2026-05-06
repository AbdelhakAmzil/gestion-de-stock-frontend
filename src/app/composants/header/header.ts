import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  connectedUser: UtilisateurDto = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
  }
}
