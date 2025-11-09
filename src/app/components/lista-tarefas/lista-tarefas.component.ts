import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';
import { ModalCriarTarefaComponent } from '../modal/criar/modal-criar-tarefa.component';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, ModalCriarTarefaComponent],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  modalNovoAberto = false;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.listar().subscribe((dados) => {
      this.tarefas = dados;
    });
  }

  abrirModalNova() {
    this.modalNovoAberto = true;
  }

  concluir(tarefa: Tarefa) {
    this.tarefaService.concluir(tarefa.id!, tarefa).subscribe(() => {
      this.carregarTarefas();
    });
  }

  fecharModal() {
    this.modalNovoAberto = false;
  }

  criar(tarefa: Tarefa) {
    this.tarefaService.criar(tarefa).subscribe(() => {
      this.carregarTarefas();
      this.fecharModal();
    });
  }

  deletar(id: number): void {
    this.tarefaService.deletar(id).subscribe(() => {
      this.carregarTarefas();
    });
  }
}
