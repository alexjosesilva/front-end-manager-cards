import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'; // Importe apenas o BsModalRef
@Component({
  selector: 'app-sucesso-modal',
  templateUrl: './sucesso-modal.component.html',
  styleUrls: ['./sucesso-modal.component.scss']
})
export class SucessoModalComponent {

  @Output() fecharModal = new EventEmitter<void>();
  mensagem: string = '';
  showOptions = true;
  constructor(public activeModal: BsModalRef) { }


  closeModal() {
    console.log("closeModal1");
    this.showOptions = true;
    this.activeModal.hide();
  }

}
