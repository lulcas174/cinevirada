import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-programacao',
	templateUrl: './programacao.component.html',
	styleUrls: ['./programacao.component.scss'],
	providers: [
		{ provide: CarouselConfig, useValue: { startFromIndex: 0, interval: 3000, noPause: true, noWrap: false, showIndicators: true, isAnimated: true, singleSlideOffset: true } }
	]
})
export class ProgramacaoComponent implements OnInit {
	slides = [
		{ image: 'assets/images/bloco-preto.png', text: 'Competição Bahia', apresentation_day: "25/09", route: '/' },
		{ image: 'assets/images/bloco-amarelo.png', text: 'Competição SP', apresentation_day: "26/09", route: '/' },
		{ image: 'assets/images/bloco-verde.png', text: 'Competição Pernambuco', apresentation_day: "27/09", route: '/' },
		{ image: 'assets/images/bloco-azul.png', text: 'Competição Texas', apresentation_day: "28/09", route: '/' },
		{ image: 'assets/images/bloco-rosa.png', text: 'Competição Irlanda', apresentation_day: "29/09", route: '/' },
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
