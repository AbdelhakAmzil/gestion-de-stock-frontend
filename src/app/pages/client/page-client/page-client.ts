import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CltfrsService } from '../../../services/cltfrs/cltfrs.service';
import { ClientDto } from '../../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-page-client',
  standalone: false,
  templateUrl: './page-client.html',
  styleUrls: ['./page-client.css'],
})
export class PageClient implements OnInit {
  listClient: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService,
  ) {}

  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients(): void {
    this.cltFrsService.findAllClients().subscribe((clients) => {
      this.listClient = clients;
    });
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }
}
