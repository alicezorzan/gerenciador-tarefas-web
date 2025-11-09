import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTarefasComponent } from './lista-tarefas.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TarefaService } from '../../services/tarefa.service';
import { of } from 'rxjs';
import { Tarefa } from '../../models/tarefa';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasComponent;
  let fixture: ComponentFixture<ListaTarefasComponent>;
  let tarefaService: TarefaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTarefasComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTarefasComponent);
    component = fixture.componentInstance;
    tarefaService = TestBed.inject(TarefaService);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar as tarefas ao iniciar', () => {
    const tarefasMock: Tarefa[] = [
      { id: 1, titulo: 'T1', descricao: 'Desc1', concluida: false },
      { id: 2, titulo: 'T2', descricao: 'Desc2', concluida: true },
    ];

    spyOn(tarefaService, 'listar').and.returnValue(of(tarefasMock));

    component.ngOnInit();

    expect(tarefaService.listar).toHaveBeenCalled();
    expect(component.tarefas).toEqual(tarefasMock);
  });

  it('deve abrir e fechar o modal de nova tarefa', () => {
    expect(component.modalNovoAberto).toBeFalse();
    component.abrirModalNova();
    expect(component.modalNovoAberto).toBeTrue();
    component.fecharModal();
    expect(component.modalNovoAberto).toBeFalse();
  });

  it('deve concluir uma tarefa', () => {
    const tarefaMock: Tarefa = { id: 1, titulo: 'T1', descricao: 'Desc1', concluida: false };

    spyOn(tarefaService, 'concluir').and.returnValue(of({ ...tarefaMock, concluida: true }));
    spyOn(tarefaService, 'listar').and.returnValue(of([{ ...tarefaMock, concluida: true }]));

    component.concluir(tarefaMock);

    expect(tarefaService.concluir).toHaveBeenCalledWith(tarefaMock.id!, tarefaMock);
    expect(tarefaService.listar).toHaveBeenCalled();
  });

  it('deve criar uma tarefa', () => {
    const tarefaMock: Tarefa = {
      id: 1,
      titulo: 'Nova Tarefa',
      descricao: 'Desc',
      concluida: false,
    };

    spyOn(tarefaService, 'criar').and.returnValue(of(tarefaMock));
    spyOn(tarefaService, 'listar').and.returnValue(of([tarefaMock]));

    component.criar(tarefaMock);

    expect(tarefaService.criar).toHaveBeenCalledWith(tarefaMock);
    expect(component.modalNovoAberto).toBeFalse();
    expect(tarefaService.listar).toHaveBeenCalled();
  });

  it('deve deletar uma tarefa', () => {
    const tarefaMock: Tarefa = { id: 1, titulo: 'T1', descricao: 'Desc1', concluida: false };

    spyOn(tarefaService, 'deletar').and.returnValue(of(void 0));
    spyOn(tarefaService, 'listar').and.returnValue(of([]));

    component.deletar(tarefaMock.id!);

    expect(tarefaService.deletar).toHaveBeenCalledWith(tarefaMock.id!);
    expect(tarefaService.listar).toHaveBeenCalled();
  });
});
