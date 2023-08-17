import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ButtonStyleModule } from 'src/app/shared/button-style/button-style.module';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { startFromIndex: 0, interval: 3000, noPause: true, noWrap: false, showIndicators: true, isAnimated: true, singleSlideOffset: true } }
  ]
})
export class CreditosComponent implements OnInit {
  listaCreditos = [
    { equipe: 'PET' },
    { equipe: 'Curadoria' },
    { equipe: 'Juri' },
    { equipe: 'Cobertura' },
  ];

  isMobile = false;
  titulo: string | undefined

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkMobile();
    console.log(this.isMobile)
  }


  checkMobile(): void {
    this.isMobile = this.deviceService.isMobile();

  }

  goToListaEquipes() {
    this.router.navigate(['/equipe']);
  }
}
