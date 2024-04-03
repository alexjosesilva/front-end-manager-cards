import { Component } from '@angular/core';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  //aqui fica a chamada para consumiro o api do backend
  cards = [
    { title: 'Conexão Itau', description: 'Emita NF-e, controle dseu caixa e estoque, conscilie recebiveis e mais' , icon: 'fas fa-school'},
    { title: 'tecnologia no PDV', description: 'Automatize e integre tecnologias à gestão do ponto de venda' , icon: 'fas fa-laptop' },
    { title: 'beneficios Ticket', description: 'Alimentação, Restaurante, Flex e Superflex, Conheça!' , icon: 'fas fa-money-bill-alt'},
    { title: 'Omier sistema de gestão', description: 'Gerencie o financeiro, pedidos de venda, estoque e cobrança do seu negócio' , icon: 'fas fa-screwdriver'},
    { title: 'gestão de RH ', description: 'Centralize a gestão do seu RH com Tecnologia', icon: 'fas fa-people-arrows' },
    { title: 'conteúdos', description: 'Tenho acesso a conteúdo gratuito sobre empreendedorismo e gestão' , icon: 'fas fa-book-reader' },
    { title: 'noticias', description: 'Os temas mais importantes de mercado pra alvancar seu negocios', icon: 'fas fa-newspaper' }
  ];

  constructor(private modalService: BsModalService) {}

  openModal(card: any) {
    const modalRef = this.modalService.show(ModalComponent);
    
    if (modalRef && modalRef.content) {    
      modalRef.content.card = card;
    } else {
      console.error('modalRef.content não está definido corretamente');
    }
  }
}
