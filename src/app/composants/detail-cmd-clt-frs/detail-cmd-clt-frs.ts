import { Component, Input, OnInit } from '@angular/core';
import { ClientDto } from '../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  standalone: false,
  templateUrl: './detail-cmd-clt-frs.html',
  styleUrls: ['./detail-cmd-clt-frs.css'],
})
export class DetailCmdCltFrs implements OnInit {
  @Input()
  origin = '';
  @Input()
  commande: any = {};
  cltFrs: ClientDto | undefined = {};

  constructor() {}

  ngOnInit(): void {
    this.extractClientFournisseur();
  }

  modifierClick(): void {}

  extractClientFournisseur(): void {
    if (this.origin === 'client') {
      this.cltFrs = this.commande?.client;
    } else if (this.origin === 'fournisseur') {
      this.cltFrs = this.commande.fournisseur;
    }
  }
}
