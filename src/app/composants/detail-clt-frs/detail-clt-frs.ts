import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { Router } from '@angular/router';
import { CltfrsService } from '../../services/cltfrs/cltfrs.service';

@Component({
  selector: 'app-detail-clt-frs',
  standalone: false,
  templateUrl: './detail-clt-frs.html',
  styleUrls: ['./detail-clt-frs.css'],
})
export class DetailCltFrs implements OnInit {
  @Input()
  origin = '';
  @Input()
  clientFournisseur: any = {};
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService,
  ) {}

  ngOnInit(): void {}

  modifierClientFournisseur(): void {
    if (this.origin === 'client') {
      this.router.navigate(['dashboard', 'nouveauclient', this.clientFournisseur.id]); // ✅
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['dashboard', 'nouveaufournisseur', this.clientFournisseur.id]); // ✅
    }
  }

  confirmerEtSupprimer(): void {
    if (this.origin === 'client') {
      this.cltFrsService.deleteClient(this.clientFournisseur.id).subscribe(
        (res) => {
          this.suppressionResult.emit('success');
        },
        (error) => {
          this.suppressionResult.emit(error.error.error);
        },
      );
    } else if (this.origin === 'fournisseur') {
      this.cltFrsService.deleteFournisseur(this.clientFournisseur.id).subscribe(
        (res) => {
          this.suppressionResult.emit('success');
        },
        (error) => {
          this.suppressionResult.emit(error.error.error);
        },
      );
    }
  }

  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
