import { TestBed } from '@angular/core/testing';
import { TarefaService } from './tarefa.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Tarefa } from '../models/tarefa';

describe('TarefaService', () => {
  let tarefaService: TarefaService;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://gerenciador-tarefas-production-c7e8.up.railway.app/api/tarefas';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), TarefaService],
    });

    tarefaService = TestBed.inject(TarefaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve listar tarefas', () => {
    const mockTarefas: Tarefa[] = [
      { id: 1, titulo: 'T1', descricao: 'D1', concluida: false },
      { id: 2, titulo: 'T2', descricao: 'D2', concluida: true },
    ];

    tarefaService.listar().subscribe((tarefas) => {
      expect(tarefas).toEqual(mockTarefas);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockTarefas);
  });

  it('deve buscar tarefa por ID', () => {
    const mockTarefa: Tarefa = { id: 1, titulo: 'T1', descricao: 'D1', concluida: false };

    tarefaService.buscarPorId(1).subscribe((tarefa) => {
      expect(tarefa).toEqual(mockTarefa);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTarefa);
  });

  it('deve criar uma tarefa', () => {
    const novaTarefa: Tarefa = { titulo: 'Nova', descricao: 'Desc', concluida: false };
    const resposta: Tarefa = { ...novaTarefa, id: 3 };

    tarefaService.criar(novaTarefa).subscribe((tarefa) => {
      expect(tarefa).toEqual(resposta);
    });

    const req = httpMock.expectOne(`${apiUrl}/criar`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(novaTarefa);
    req.flush(resposta);
  });

  it('deve concluir uma tarefa', () => {
    const tarefa: Tarefa = { id: 1, titulo: 'T1', descricao: 'D1', concluida: false };
    const atualizada: Tarefa = { ...tarefa, concluida: true };

    tarefaService.concluir(tarefa.id!, tarefa).subscribe((res) => {
      expect(res).toEqual(atualizada);
    });

    const req = httpMock.expectOne(`${apiUrl}/1/concluir`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(tarefa);
    req.flush(atualizada);
  });

  it('deve deletar uma tarefa', () => {
    tarefaService.deletar(1).subscribe((res) => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${apiUrl}/1/remover`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
