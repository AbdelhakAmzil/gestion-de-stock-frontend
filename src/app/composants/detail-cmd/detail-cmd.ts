import { Component, Input, OnInit } from '@angular/core';
import { LigneCommandeClientDto } from '../../../gs-api/src/models/ligne-commande-client-dto';

@Component({
  selector: 'app-detail-cmd',
  standalone: false,
  templateUrl: './detail-cmd.html',
  styleUrls: ['./detail-cmd.css'],
})
export class DetailCmd implements OnInit {
  @Input()
  ligneCommande: LigneCommandeClientDto = {};

  constructor() {}

  ngOnInit(): void {}
}
