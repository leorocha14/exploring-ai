import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-gray-100 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>

        <!-- Serviços Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <!-- Corte de Cabelo -->
          <a href="/corte-cabelo" class="block group">
            <div class="relative h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div 
                class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                [ngStyle]="{'backgroundImage': 'url(assets/images/corte.jpg)', 'filter': 'brightness(0.7)'}"
              ></div>
              <div class="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 class="text-xl font-bold mb-2">Corte de Cabelo</h3>
                <p class="text-sm">Cortes modernos e clássicos para todos os estilos</p>
                <p class="text-lg font-bold mt-2">A partir de R$ 45,00</p>
              </div>
            </div>
          </a>

          <!-- Barba -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="w-full h-64 bg-gray-200 flex items-center justify-center">
              <i class="fas fa-beard text-6xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">Barba</h3>
              <p class="text-gray-600 mb-4">
                Modelagem completa da barba com toalha quente, produtos especiais
                e finalização com óleo.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-yellow-500">R$ 35,00</span>
                <a 
                  routerLink="/agendamento" 
                  class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>

          <!-- Combo -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="w-full h-64 bg-gray-200 flex items-center justify-center">
              <i class="fas fa-cut text-6xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">Combo (Corte + Barba)</h3>
              <p class="text-gray-600 mb-4">
                Pacote completo incluindo corte de cabelo e barba.
                Economize reservando os dois serviços juntos.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-yellow-500">R$ 75,00</span>
                <a 
                  routerLink="/agendamento" 
                  class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>

          <!-- Tratamento Capilar -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="w-full h-64 bg-gray-200 flex items-center justify-center">
              <i class="fas fa-spa text-6xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">Tratamento Capilar</h3>
              <p class="text-gray-600 mb-4">
                Hidratação profunda, nutrição e reconstrução para seus cabelos.
                Inclui massagem no couro cabeludo.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-yellow-500">R$ 80,00</span>
                <a 
                  routerLink="/agendamento" 
                  class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Informações Adicionais -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-center mb-8">Informações Importantes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <ul class="space-y-2">
                <li class="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>09:00 - 20:00</span>
                </li>
                <li class="flex justify-between">
                  <span>Sábado</span>
                  <span>09:00 - 18:00</span>
                </li>
                <li class="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold mb-4">Formas de Pagamento</h3>
              <ul class="space-y-2">
                <li>✓ Dinheiro</li>
                <li>✓ Cartão de Crédito</li>
                <li>✓ Cartão de Débito</li>
                <li>✓ PIX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ServicosComponent {
  constructor(private router: Router) {}

  navegarParaCorteCabelo() {
    console.log('Navegando para página de corte de cabelo...');
    this.router.navigateByUrl('/corte-cabelo').then(() => {
      console.log('Navegação concluída');
    }).catch(error => {
      console.error('Erro na navegação:', error);
    });
  }
} 