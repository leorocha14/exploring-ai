import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-gray-100 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8">Agende seu Horário</h1>
        
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Serviço -->
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="servico">
                Selecione o Serviço
              </label>
              <select
                id="servico"
                [(ngModel)]="formData.servico"
                name="servico"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              >
                <option value="">Selecione um serviço</option>
                <option value="Corte Masculino Tradicional">Corte Masculino Tradicional - R$ 45,00</option>
                <option value="Corte Degradê">Corte Degradê - R$ 55,00</option>
                <option value="Corte Premium">Corte Premium - R$ 75,00</option>
                <option value="Corte Feminino">Corte Feminino - R$ 65,00</option>
                <option value="Barba">Barba - R$ 35,00</option>
                <option value="Tratamentos">Tratamentos - A partir de R$ 50,00</option>
              </select>
            </div>

            <!-- Profissional -->
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="profissional">
                Escolha o Profissional
              </label>
              <select
                id="profissional"
                [(ngModel)]="formData.profissional"
                name="profissional"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              >
                <option value="">Selecione um profissional</option>
                <option value="joao">João</option>
                <option value="pedro">Pedro</option>
                <option value="carlos">Carlos</option>
              </select>
            </div>

            <!-- Data -->
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="data">
                Data
              </label>
              <input
                type="date"
                id="data"
                [(ngModel)]="formData.data"
                name="data"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              >
            </div>

            <!-- Horário -->
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="horario">
                Horário
              </label>
              <select
                id="horario"
                [(ngModel)]="formData.horario"
                name="horario"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              >
                <option value="">Selecione um horário</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>

            <!-- Nome -->
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="nome">
                Seu Nome
              </label>
              <input
                type="text"
                id="nome"
                [(ngModel)]="formData.nome"
                name="nome"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              >
            </div>

            <!-- Telefone -->
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="telefone">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                [(ngModel)]="formData.telefone"
                name="telefone"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              >
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AgendamentoComponent implements OnInit {
  formData = {
    servico: '',
    profissional: '',
    data: '',
    horario: '',
    nome: '',
    telefone: ''
  };

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit() {
    this.agendamentoService.getServicoSelecionado().subscribe(servico => {
      if (servico) {
        this.formData.servico = servico;
      }
    });
  }

  onSubmit() {
    console.log('Dados do agendamento:', this.formData);
    // Aqui você implementaria a lógica para enviar os dados para o backend
    alert('Agendamento realizado com sucesso!');
  }
} 