import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-programacao',
	templateUrl: './programacao.component.html',
	styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent implements OnInit {
	slides = [
		{ image: 'assets/images/competicao-bahia.jpg', text: 'Competição Bahia' },
		{ image: 'assets/images/sinal-mao-1.webp', text: 'slide brabo' },
		{ image: 'assets/images/sinal-mao-1.webp', text: 'slide brabo2' },
		{ image: 'assets/images/sinal-mao-1.webp', text: 'slide brabo3' },
		{ image: 'assets/images/sinal-mao-1.webp', text: 'slide brabo4' },
		{ image: 'assets/images/sinal-mao-1.webp', text: 'slide brabo5' },

	];
	itemsPerSlide = 3;
	singleSlideOffset = true;
	isMobile = false;

	constructor(private deviceService: DeviceDetectorService){
	}

	ngOnInit(): void {
		this.checkMobile();
	}
	
	checkMobile(): void {
		this.isMobile = this.deviceService.isMobile();
		if(this.isMobile === true){
			this.itemsPerSlide = 1;
		}
	}

	onSlideRangeChange(indexes: number[] | void): void {
		console.log(this.slides.length);
	}
	
	
}
