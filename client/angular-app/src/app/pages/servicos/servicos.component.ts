import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-gray-100 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>

        <!-- Serviços Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Corte de Cabelo -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="assets/images/corte.jpg" alt="Corte de Cabelo" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">Corte de Cabelo</h3>
              <p class="text-gray-600 mb-4">
                Cortes modernos e clássicos realizados por profissionais experientes.
                Inclui lavagem e finalização.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-yellow-500">R$ 50,00</span>
                <a 
                  routerLink="/agendamento" 
                  class="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>

          <!-- Barba -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="assets/images/barba.jpg" alt="Barba" class="w-full h-64 object-cover">
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
            <img src="assets/images/combo.jpg" alt="Combo" class="w-full h-64 object-cover">
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
            <img src="assets/images/tratamento.jpg" alt="Tratamento" class="w-full h-64 object-cover">
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
export class ServicosComponent {} 