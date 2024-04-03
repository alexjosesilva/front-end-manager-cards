import { Component } from '@angular/core';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cards = [
    { title: 'Conexão Itau', description: 'Descrição do Card 1' , icon: 'fas fa-school'},
    { title: 'tecnologia no PDV', description: 'Descrição do Card 2' , icon: 'fas fa-laptop' },
    { title: 'beneficios Ticket', description: 'Descrição do Card 3' , icon: 'fas fa-money-bill-alt'},
    { title: 'Omier sistema de gestão', description: 'Descrição do Card 1' , icon: 'fas fa-screwdriver'},
    { title: 'gestão de RH ', description: 'Descrição do Card 2', icon: 'fas fa-people-arrows' },
    { title: 'conteúdos', description: 'Descrição do Card 3' , icon: 'fas fa-book-reader' },
    { title: 'noticias', description: 'Descrição do Card 3', icon: 'fas fa-newspaper' }
  ];

  constructor(private modalService: BsModalService) {}

  openModal(card: any) {
    const modalRef = this.modalService.show(ModalComponent);
    if (modalRef.content) {
      if (card !=null) {
      modalRef.content.card = card;
    }
  }
}
}
