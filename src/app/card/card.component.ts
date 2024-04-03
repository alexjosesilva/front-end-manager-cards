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
    { title: 'Conexão Itau', description: 'Descrição do Card 1' },
    { title: 'tecnologia no PDV', description: 'Descrição do Card 2' },
    { title: 'beneficios Ticket', description: 'Descrição do Card 3' },
    { title: 'Omier sistema de gestão', description: 'Descrição do Card 1' },
    { title: 'gestçao de RH ', description: 'Descrição do Card 2' },
    { title: 'conteúdos', description: 'Descrição do Card 3' },
    { title: 'noticias', description: 'Descrição do Card 3' }
  ];

  constructor(private modalService: BsModalService) {}

  openModal(card: any) {
    const modalRef = this.modalService.show(ModalComponent);
    if (modalRef.content) {
      modalRef.content.card = card;
    }
  }
}
