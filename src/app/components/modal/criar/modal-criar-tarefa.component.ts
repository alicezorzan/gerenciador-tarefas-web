import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../models/tarefa';

@Component({
  selector: 'app-modal-criar-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-criar-tarefa.component.html',
  styleUrls: ['./modal-criar-tarefa.component.css'],
})
export class ModalCriarTarefaComponent {
  @Output() salvar = new EventEmitter<Tarefa>();
  @Output() fechar = new EventEmitter<void>();

  tarefa: Tarefa = { titulo: '', descricao: '', concluida: false };

  enviar() {
    this.salvar.emit(this.tarefa);
  }

  fecharModal() {
    this.fechar.emit();
  }
}
