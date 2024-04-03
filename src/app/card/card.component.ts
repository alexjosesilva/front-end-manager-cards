import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
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

  constructor(private modalService: NgbModal) {}

  openModal(card: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.card = card;
  }
}
