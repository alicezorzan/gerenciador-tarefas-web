import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private readonly apiUrl =
    'https://gerenciador-tarefas-production-c7e8.up.railway.app/api/tarefas';

  constructor(private readonly http: HttpClient) {}

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  criar(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUrl}/criar`, tarefa);
  }

  concluir(id: number, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}/concluir`, tarefa);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/remover`);
  }
}
