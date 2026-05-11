import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { LoaderState } from './loader.model'; // ✅ vérifiez ce chemin

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader implements OnInit {
  show = false;

  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef  // ✅
  ) {}

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: LoaderState) => {
      //console.log('Loader state:', state, 'requestCount:', state.show);
      this.show = state.show;
      this.cdr.detectChanges();  // ✅ forcer la mise à jour
    });
  }
}

/*
Code article  : ART-001
Designation   : Laptop Dell XPS
Prix HT       : 1200
Taux TVA      : 20
Catégorie     : CAT-001 - Informatique  (doit apparaître dans la liste)

*/
