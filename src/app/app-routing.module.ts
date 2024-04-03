import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component'; // Importe o componente CardComponent
import { ModalComponent } from './modal/modal.component'; // Importe o componente ModalComponent

const routes: Routes = [
  { path: 'card', component: CardComponent }, // Rota para o componente CardComponent
  { path: 'modal', component: ModalComponent }, // Rota para o componente ModalComponent
  // Adicione outras rotas conforme necessário
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
