import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cineviradinha',
  templateUrl: './cineviradinha.component.html',
  styleUrls: ['./cineviradinha.component.scss'],
  providers: [BsModalService]
})
export class CineviradinhaComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;
  sessao_numero?: number;

  openModal(template: TemplateRef<any>, sessao: number) {
    this.modalRef = this.modalService.show(template);
    this.sessao_numero = sessao;
  }

  listaObjFilmesSessao1 = [
    {
      titulo: 'Dando asas à imaginação (2017)',
      link_video: '/cineviradinha',
      poster: 'assets/image-cineviradinha/dando-asas-a-imaginacao-01.jpg',
    },
    {
      titulo: 'Cores e Botas (2010)',
      link_video: '/cineviradinha',
      poster: 'assets/image-cineviradinha/coresebotas.jpeg',
    },
    {
      titulo: 'Ewé de Òsányìn: o segredo das folhas(2021)',
      link_video: '/cineviradinha',
      poster: 'assets/image-cineviradinha/o segredo das folhas.jpg',
    },
    {
      titulo: 'Um Lugar Comum(2016)',
      link_video: '/cineviradinha',
      poster: 'assets/image-cineviradinha/um lugar comum.png',
    },
    {
      titulo: 'Oro mimá(2012)',
      link_video: '/cineviradinha',
      poster: 'assets/image-cineviradinha/oro mimá.png',
    }
  ]

  listaObjFilmesSessao2 = [
    {
      titulo: 'FELIPA',
      link_video: '/cineviradinha',
      poster: 'assets/image-petianes/FELIPA (6).png',
    },
    {
      titulo: 'POEMA DESOBEDIENTE',
      link_video: '/cineviradinha',
      poster: 'assets/image-petianes/poema desobediente.png',
    },
    {
      titulo: 'UMA IRMÃ',
      link_video: '/cineviradinha',
      poster: 'assets/image-petianes/Uma Irmã Dir. Beatriz Dantas (1).png',
    },
    {
      titulo: 'CE 085 BR 222',
      link_video: '/cineviradinha',
      poster: 'assets/image-petianes/cartaz-ce085-br222-cartaz.png',
    },

  ]
}
