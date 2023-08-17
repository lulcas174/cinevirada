import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-programacao',
	templateUrl: './programacao.component.html',
	styleUrls: ['./programacao.component.scss'],
	providers: [
		{ provide: CarouselConfig, useValue: { startFromIndex: 0, interval: 4000, noPause: true, noWrap: false, showIndicators: true, isAnimated: true, singleSlideOffset: true }}
	]
})
export class ProgramacaoComponent implements OnInit {
	slides = [
		{ image: 'assets/images/carrossel-1.png', text: 'Clique aqui e veja', route: '/competitiva-bahia'},
		{ image: 'assets/images/carrossel-2.png', text: 'Clique aqui e veja', route: '/competitiva-nordeste'},
		{ image: 'assets/images/carrossel-3.png', text: 'Clique aqui e veja', route: '/cineviradinha' },
	  ];
	  
	itemsPerSlide = 3;
	singleSlideOffset = true;
	isMobile = false;


	constructor(private deviceService: DeviceDetectorService) {
	}

	ngOnInit(): void {
		this.checkMobile();
	}

	checkMobile(): void {
		this.isMobile = this.deviceService.isMobile();
		if (this.isMobile === true) {
			this.itemsPerSlide = 1;
		}
	}

	onSlideRangeChange(indexes: number[] | void): void {
		console.log(this.slides.length);
	}
	


}
