import { Component } from '@angular/core';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTarefasComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {}
