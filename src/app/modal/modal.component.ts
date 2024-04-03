import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() card: any;
  showOptions = true;
  showPhone = false;
  showEmail = false;
  phoneNumber: string = '';
  email: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  showPhoneInput() {
    this.showOptions = false;
    this.showPhone = true;
  }

  showEmailInput() {
    this.showOptions = false;
    this.showEmail = true;
  }

  closeModal() {
    this.showOptions = true;
    this.showPhone = false;
    this.showEmail = false;
  }

  requestContact() {
    if (this.phoneNumber) {
      // Lógica para solicitar contato via telefone
    } else if (this.email) {
      // Lógica para solicitar contato via e-mail
    }
    this.activeModal.close();
  }
}
