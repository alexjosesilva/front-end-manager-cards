import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sucesso-modal',
  templateUrl: './sucesso-modal.component.html',
  styleUrls: ['./sucesso-modal.component.scss']
})
export class SucessoModalComponent {

  @Output() fecharModal = new EventEmitter<void>();
  mensagem: string = '';

  constructor() { }

  fechar() {
    console.log("closeModal3");
    this.fecharModal.emit();
  }

}
