import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CltfrsService } from '../../../services/cltfrs/cltfrs.service';
import { ClientDto } from '../../../../gs-api/src/models/client-dto';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-client',
  standalone: false,
  templateUrl: './page-client.html',
  styleUrls: ['./page-client.css'],
})
export class PageClient implements OnInit {
  listClient: Array<ClientDto> = [];
  listClientFiltree: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.findAllClients(), 500);

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        filter((event: any) => event.urlAfterRedirects.includes('clients')),
      )
      .subscribe(() => {
        this.findAllClients();
      });
  }

  findAllClients(): void {
    this.cltFrsService.findAllClients().subscribe((clients: ClientDto[]) => {
      this.listClient = clients;
      this.listClientFiltree = clients;
    });
  }

  rechercherClient(event: any): void {
    const terme = event.target.value.toLowerCase();
    if (!terme) {
      this.listClientFiltree = this.listClient;
    } else {
      this.listClientFiltree = this.listClient.filter(
        (client) =>
          client.nom?.toLowerCase().includes(terme) ||
          client.prenom?.toLowerCase().includes(terme) ||
          client.mail?.toLowerCase().includes(terme) ||
          client.numTel?.toLowerCase().includes(terme),
      );
    }
  }

  nouveauClient(): void {
    this.router.navigate(['dashboard', 'nouveauclient']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }
}
