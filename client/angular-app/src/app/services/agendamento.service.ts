import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private servicoSelecionado = new BehaviorSubject<string>('');

  setServicoSelecionado(servico: string) {
    this.servicoSelecionado.next(servico);
  }

  getServicoSelecionado() {
    return this.servicoSelecionado.asObservable();
  }
} 