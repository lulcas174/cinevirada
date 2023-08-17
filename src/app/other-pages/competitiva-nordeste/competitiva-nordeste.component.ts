import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-competitiva-nordeste',
  templateUrl: './competitiva-nordeste.component.html',
  styleUrls: ['./competitiva-nordeste.component.scss'],
  providers: [BsModalService]
})
export class CompetitivaNordesteComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;
  sessao_numero?:number;
  
  openModal(template: TemplateRef<any>, sessao: number) {
    this.modalRef = this.modalService.show(template);
    this.sessao_numero = sessao;
  }

  listaObjFilmesSessao1 = [
    {
      titulo: 'Luz, Câmera, Ocupação (2022)',
      link_video: "https://youtu.be/doPko3c-OWY",
      link_realizadore: 'https://youtu.be/2CeTM8coDeM',
      poster: 'assets/image-nordeste/luz-camera-ocupacao.png',
    },
    {
      titulo: 'Invasão ou Contatos Imediatos do 3º Mundo (2023)',
      link_video: "https://youtu.be/UUCkQ1aG1EY",
      link_realizadore: 'https://youtu.be/A6Nmwo9TM7M',
      poster: 'assets/image-nordeste/Ets-Curta_Poster-01-Amanda.jpeg',
    },
    {
      titulo: 'ANARRIÊ(2023)',
      link_video: "https://youtu.be/YLSaOZr5ZZc",
      link_realizadore: '/competitiva-nordeste',
      poster: 'assets/image-nordeste/ANARRIÊ-POSTER-1-1(1).jpg',
    },
    {
      titulo: 'Central Tocaia (2023)',
      link_video: "https://youtu.be/b5JbhADdQ9I",
      link_realizadore: '/competitiva-nordeste',
      poster: 'assets/image-nordeste/Central Tocaia - capa versão 1 - Thiago Pombo.jpg',
    },
    {
      titulo: 'Crimes Holandeses (2023)',
      link_video: "https://youtu.be/MsCkKKsAvKk",
      link_realizadore: '/competitiva-nordeste',
      poster: 'assets/image-nordeste/poster-Crimes-Holandeses.png',
    },
    {
      titulo: 'Influência (2023)',
      link_video: "https://youtu.be/QNp_R3ZRM0I",
      link_realizadore: '/competitiva-nordeste',
      poster: 'assets/image-nordeste/teste-influencia.png',
    }
  ]

  listaObjFilmesSessao2 = [
    {
      titulo: 'Zumbi (2023)',
      link_video: "https://youtu.be/d94owJG3DgQ",
      link_realizadore: 'https://youtu.be/YJP4Elr_Mxs',
      poster: 'assets/image-nordeste/sessao-2/zumbi - cartaz r - Mostra Monstra.jpg',
    },
    {
      titulo: 'Jeniffer (2023)',
      link_video: "https://youtu.be/hH-q-qQyvzE",
      link_realizadore: 'https://youtu.be/irAXmB-azfk',
      poster: 'assets/image-nordeste/sessao-2/jenifferpostoficial-MatheusMendes.png',
    },
    {
      titulo: 'Encruzilhada do Som (2023)',
      link_video: "https://www.youtube.com/watch?v=hPI-b_utkfI",
      link_realizadore: 'https://youtu.be/x1y7FNPju4Q',
      poster: 'assets/image-nordeste/sessao-2/Encruzilhada-Cartaz-MostraMonstra.jpg',
    },
    {
      titulo: 'SÓ EXISTE CAMINHO QUANDO HÁ SENTIDO (2023)',
      link_video: "https://youtu.be/nDd3GkQo260",
      link_realizadore: 'https://youtu.be/5B2TqFZroXc',
      poster: 'assets/image-nordeste/sessao-2/POSTER - Adu Santos.png',
    }
  ]


  listaObjFilmesSessao3 = [
    {
      titulo: 'As Velas do Monte Castelo (2022)',
      link_video: "https://youtu.be/rGBeTvgFF5I",
      link_realizadore: 'https://youtu.be/Kyfiak4zbTs',
      poster: 'assets/image-nordeste/sessao-3/poster-avdmc-2 (1) - Lanna Carvalho.jpg',
    },
    {
      titulo: 'Do Tanto de Telha no Mundo (2022)',
      link_video: "https://youtu.be/s3RXkQ-6SRs",
      link_realizadore: 'https://youtu.be/ok7lg80XE3U',
      poster: 'assets/image-nordeste/sessao-3/Cartaz - Telhinha Filme.jpg',
    },
    {
      titulo: 'Trançatlânticas (2023)',
      link_video: "https://youtu.be/LXWO7GkGrks",
      link_realizadore: 'https://youtu.be/Icj43wiM4Ac',
      poster: 'assets/image-nordeste/sessao-3/Trançaatlantica.png',
    },
    {
      titulo: 'Anjos Cingidos (2022)',
      link_video: "https://youtu.be/7-ThwMIIuWc",
      link_realizadore: 'https://youtu.be/uXl5H0OZTjU',
      poster: 'assets/image-nordeste/sessao-3/Cartaz Anjos Cingidos - Acauã Produções Culturais.jpg',
    },
    {
      titulo: 'Será que as casas também sentem saudade? (2023)',
      link_video: "https://youtu.be/xxog-xzrBaQ",
      link_realizadore: 'https://youtu.be/9J1_8kQP3k8',
      poster: 'assets/image-nordeste/sessao-3/3 - Leandro Machado.jpg',
    }
  ]
}
