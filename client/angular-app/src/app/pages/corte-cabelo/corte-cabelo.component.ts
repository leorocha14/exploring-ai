import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-corte-cabelo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section com Parallax -->
    <div class="relative h-[400px] overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-fixed"
        [ngStyle]="{'backgroundImage': 'url(assets/images/corte.jpg)', 'filter': 'brightness(0.7)'}"
      ></div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="text-white">
          <h1 class="text-5xl font-bold mb-4">Cortes de Cabelo</h1>
          <p class="text-xl">Escolha o estilo que combina com você</p>
        </div>
      </div>
    </div>

    <!-- Lista de Serviços -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Corte Masculino -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-2xl font-bold mb-4">Corte Masculino Tradicional</h3>
          <ul class="space-y-4 mb-6">
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Corte com tesoura ou máquina</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Acabamento com navalha</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Lavagem e finalização</span>
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-yellow-500">R$ 45,00</span>
            <button 
              (click)="agendarServico('Corte Masculino Tradicional')" 
              class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              Agendar
            </button>
          </div>
        </div>

        <!-- Corte Masculino Degradê -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-2xl font-bold mb-4">Corte Degradê</h3>
          <ul class="space-y-4 mb-6">
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Degradê personalizado</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Acabamento com navalha</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Lavagem e finalização com pomada</span>
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-yellow-500">R$ 55,00</span>
            <button 
              (click)="agendarServico('Corte Degradê')" 
              class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              Agendar
            </button>
          </div>
        </div>

        <!-- Corte Masculino Premium -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-2xl font-bold mb-4">Corte Premium</h3>
          <ul class="space-y-4 mb-6">
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Consulta de estilo personalizada</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Corte com técnicas avançadas</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Hidratação e finalização premium</span>
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-yellow-500">R$ 75,00</span>
            <button 
              (click)="agendarServico('Corte Premium')" 
              class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              Agendar
            </button>
          </div>
        </div>

        <!-- Corte Feminino -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-2xl font-bold mb-4">Corte Feminino</h3>
          <ul class="space-y-4 mb-6">
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Corte personalizado</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Lavagem com produtos especiais</span>
            </li>
            <li class="flex items-start">
              <span class="text-yellow-500 mr-2">✓</span>
              <span>Finalização com escova</span>
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-yellow-500">R$ 65,00</span>
            <button 
              (click)="agendarServico('Corte Feminino')" 
              class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CorteCabeloComponent {
  constructor(
    private router: Router,
    private agendamentoService: AgendamentoService
  ) {}

  agendarServico(servico: string) {
    this.agendamentoService.setServicoSelecionado(servico);
    this.router.navigate(['/agendamento']);
  }
} 