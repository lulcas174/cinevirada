import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-competitiva-bahia',
  templateUrl: './competitiva-bahia.component.html',
  styleUrls: ['./competitiva-bahia.component.scss'],
  providers: [BsModalService]
})
export class CompetitivaBahiaComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;
  sessao_numero?:number;

  openModal(template: TemplateRef<any>, sessao: number) {
    this.modalRef = this.modalService.show(template);
    this.sessao_numero = sessao;
  }
  
  listaObjFilmesSessao1 = [
    {
      titulo: 'daqui pra li, de lá pra cá (2022)',
      link_video: "https://youtu.be/ZVuuDHD9tGI",
      link_realizadore: 'https://youtu.be/UOHkEvm9LeM',
      poster: 'assets/image-bahia/sessao-1/daqui pra li.png',
    },
    {
      titulo: 'Caminhos que levam a moça da reforma (2023)',
      link_video: "https://youtu.be/LBqU850U77k",
      link_realizadore: 'https://youtu.be/vqVOLHYxKm8',
      poster: 'assets/image-bahia/sessao-1/moça da reforma.png',
    },
    {
      titulo: 'Rema (2023)',
      link_video: "https://youtu.be/rKdHdlOYM5Q",
      link_realizadore: 'https://youtu.be/4XIRekQ1y6A',
      poster: 'assets/image-bahia/sessao-1/REMA.png',
    },
    {
      titulo: 'Le_pasSarim.exe (2022)',
      link_video: "https://youtu.be/7rtMY4YzsJE",
      link_realizadore: 'https://youtu.be/m6lOYvoB8Jg',
      poster: 'assets/image-bahia/sessao-1/La passin sla.png',
    },
    {
      titulo: 'Desconserto (2023)',
      link_video: "https://youtu.be/eeUjO5yHrEo",
      link_realizadore: '/competitiva-bahia',
      poster: 'assets/image-bahia/sessao-1/DESCONSERTO - Haniel Lucena.png',
    },
    {
      titulo: 'Loci Loci (2023)',
      link_video: "https://youtu.be/bGZ5Kc21dmk",
      link_realizadore: 'https://youtu.be/6cF3m0agaZs',
      poster: 'assets/image-bahia/sessao-1/poster_Lociloci_novo - kallyane nery.jpg',  
    }
  ]


  listaObjFilmesSessao2 = [
    {
      titulo: 'Retomada (2022)',
      link_video: "https://youtu.be/cQt1lBWNlqI",
      link_realizadore: 'https://youtube.com/shorts/rpdJJtLicUw',
      poster: 'assets/image-bahia/sessao-2/retomada.png',
    },
    {
      titulo: 'T de Tubarão (2022)',
      link_video: "https://youtu.be/ikRkFVAAchU",
      link_realizadore: 'https://youtu.be/9rsIWMDLVG4',
      poster: 'assets/image-bahia/sessao-2/CAPA T DE TUBARÃO - Pólen Acácio.jpg',
    },
    {
      titulo: 'Não esquece o champagne (2022)',
      link_video: "https://youtu.be/LchHLPTEyrU",
      link_realizadore: '/competitiva-bahia',
      poster: 'assets/image-bahia/sessao-2/n esqueça do champagne.png',
    },
    {
      titulo: 'Seresta (2022)',
      link_video: "https://youtu.be/o4qjLpxqJMs",
      link_realizadore: 'https://youtu.be/WhSlDii6rYM',
      poster: 'assets/image-bahia/sessao-2/seresta_poster_mostra_3x4 - Duba.jpg',
    },
    {
      titulo: 'Vibrações (2022)',
      link_video: "https://youtu.be/Ip6U1GNmKbQ",
      link_realizadore: 'https://youtu.be/IOpfEF6abzk',
      poster: 'assets/image-bahia/sessao-2/VIBRAÇÕES CAPA - Irai Iakowsky Barbosa.png',
    },
    {
      titulo: 'Quando o mar te abraçar novamente (2023)',
      link_video: "https://youtu.be/6dZc5Cd2vgQ",
      link_realizadore: 'https://youtu.be/sa3YVEslCCI',
      poster: 'assets/image-bahia/sessao-2/quando o mar te abraçar.png',  
    }
  ]


  listaObjFilmesSessao3 = [
    {
      titulo: 'Alguém me ensine a respirar (2023)',
      link_video: "https://youtu.be/ZB6cHM-XV9I",
      link_realizadore: 'https://youtu.be/GPociUvWcxI',
      poster: 'assets/image-bahia/sessao-3/alguem que me ensine.png',
    },
    {
      titulo: 'Mais um dia (2022)',
      link_video: "https://youtu.be/UGRwu_1s0ho",
      link_realizadore: 'https://youtu.be/AZZIFKAhT4o',
      poster: 'assets/image-bahia/sessao-3/Cartaz - Mais um dia - Laura Cristina.png',
    },
    {
      titulo: 'Mulher vestida de sol (2022)',
      link_video: "https://youtu.be/YhDKHPKOxNY",
      link_realizadore: 'https://youtu.be/Lm48Cy9wRuM',
      poster: 'assets/image-bahia/sessao-3/Cópia de cartaz MULHER VESTIDA DE SOL INSTAGRAN - Laboratório de Animação e Montagem.jpg',
    },
    {
      titulo: 'Ser feita de amor (2023)',
      link_video: "https://youtu.be/sjBKeB8t1k0",
      link_realizadore: 'https://youtu.be/eCt65vxagjg',
      poster: 'assets/image-bahia/sessao-3/ser feita de amor.png',
    },
    {
      titulo: 'VIGIAI E ORAI - a cultura do medo no Brasil (2023)',
      link_video: "https://youtu.be/K_4VLXIvuPg",
      link_realizadore: '/competitiva-bahia',
      poster: 'assets/image-bahia/sessao-3/vigiai e orai.png',
    },
    {
      titulo: 'Isso é o que eu sinto (2022)',
      link_video: "https://youtu.be/5fR7r-8r1O4",
      link_realizadore: 'https://youtu.be/2ffgod3jURA',
      poster: 'assets/image-bahia/sessao-3/isso é oq eu sinto.png',  
    },
    {
      titulo: 'Calma (2023)',
      link_video: "https://youtu.be/bvcMdKppOmM",
      link_realizadore: 'https://youtu.be/sc7NmqIgaqQ',
      poster: 'assets/image-bahia/sessao-3/CapaCalma (1) - Ayala Aoli.png',  
    }
  ]
}
