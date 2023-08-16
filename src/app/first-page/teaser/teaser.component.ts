import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {
  isMobile = false;

  constructor(private deviceService: DeviceDetectorService){
	}


  ngOnInit(): void {
		this.checkMobile();
	}

  checkMobile(): void {
		this.isMobile = this.deviceService.isMobile();
	}
}
