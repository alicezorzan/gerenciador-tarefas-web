import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCriarTarefaComponent } from './modal-criar-tarefa.component';

describe('ModalCriarTarefaComponent', () => {
  let component: ModalCriarTarefaComponent;
  let fixture: ComponentFixture<ModalCriarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarTarefaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCriarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar tarefa com valores padrão', () => {
    expect(component.tarefa).toEqual({
      titulo: '',
      descricao: '',
      concluida: false,
    });
  });

  it('deve emitir evento salvar com a tarefa preenchida', () => {
    spyOn(component.salvar, 'emit');

    component.tarefa = {
      titulo: 'Nova tarefa',
      descricao: 'Descrição da tarefa',
      concluida: false,
    };

    component.enviar();

    expect(component.salvar.emit).toHaveBeenCalledWith(component.tarefa);
  });

  it('deve emitir evento fechar ao chamar fecharModal()', () => {
    spyOn(component.fechar, 'emit');

    component.fecharModal();

    expect(component.fechar.emit).toHaveBeenCalled();
  });
});
