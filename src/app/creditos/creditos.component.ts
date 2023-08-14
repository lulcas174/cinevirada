import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { startFromIndex:0, interval: 1500, noPause: true, noWrap: false, showIndicators:true,isAnimated: true, singleSlideOffset: true } }
  ]
})
export class CreditosComponent implements OnInit {
  listaCreditos =  [
		{equipe: 'PET'},
    {equipe: 'Curadoria'},
    {equipe: 'Juri'},
    {equipe: 'Cobertura'},
	];

  template!: TemplateRef<any>;
  modalRef?: BsModalRef;
  config = {
    keyboard: true,
    class: 'modal-dialog-centered' 
    
  };
  isMobile = false;
  titulo:string | undefined
  constructor(private modalService: BsModalService, private deviceService: DeviceDetectorService) {}
  
  ngOnInit(): void {
		this.checkMobile();
	}

  openModal(template: TemplateRef<any>, customValue?: any) {
    this.modalRef = this.modalService.show(template, this.config);
    this.titulo = customValue
  } 



  checkMobile(): void {
		this.isMobile = this.deviceService.isMobile();
	
	}
}
