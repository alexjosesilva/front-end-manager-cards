import { Component, Input } from '@angular/core';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal'; // Importe apenas o BsModalRef
import { SucessoModalComponent } from '../sucesso-modal/sucesso-modal.component';
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
  selectedMethod: string = ''; // Guarda o método selecionado (telefone ou email)

  constructor(public activeModal: BsModalRef, private modalService: BsModalService) {}

  mostrarCampo(metodo: string): void {
    this.selectedMethod = metodo;
  }
  showPhoneInput() {
    console.log("phoneInput");
    this.showOptions = false;
    this.showPhone = true;
  }

  showEmailInput() {
    this.showOptions = false;
    this.showEmail = true;
  }

  closeModal() {
    console.log("closeModal1");
    this.showOptions = true;
    this.showPhone = false;
    this.showEmail = false;
    this.activeModal.hide();
  }

  requestContact() {
    if (this.phoneNumber || this.email) {
      // Lógica para solicitar contato (telefone ou e-mail)
      // Aqui você deve implementar a lógica para enviar a solicitação de contato

      // Fecha o modal atual
      console.log("closeModal2");
      this.closeModal();

      // Abre o modal de sucesso
      const successModalRef = this.modalService.show(SucessoModalComponent, {
        initialState: {
          mensagem: 'Solicitação enviada com sucesso'
        }
      });
        
      // Verifica se successModalRef e successModalRef.content são definidos
      if (successModalRef && successModalRef.content) {
        // Lidar com o evento de fechar modal do modal de sucesso
        
        successModalRef.content.fecharModal.subscribe(() => {
          console.log("5555555")
          this.closeModal();
          this.activeModal.hide(); // Fecha o modal principal
        });
      }
   
    }
  }
}
