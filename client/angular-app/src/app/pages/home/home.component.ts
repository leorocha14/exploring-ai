import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[600px] bg-cover bg-center" style="background-image: url('assets/images/barbershop-hero.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="text-white max-w-2xl">
          <h1 class="text-5xl font-bold mb-4">Barbearia Style</h1>
          <p class="text-xl mb-8">Transforme seu visual com nossos serviços profissionais de barbearia</p>
          <a routerLink="/agendamento" class="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
            Agende Agora
          </a>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-4">
              <i class="fas fa-cut text-4xl text-yellow-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Corte de Cabelo</h3>
            <p class="text-gray-600">Cortes modernos e clássicos para todos os estilos</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-4">
              <i class="fas fa-beard text-4xl text-yellow-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Barba</h3>
            <p class="text-gray-600">Modelagem e tratamento completo para sua barba</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-4">
              <i class="fas fa-spa text-4xl text-yellow-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Tratamentos</h3>
            <p class="text-gray-600">Hidratação, relaxamento e cuidados especiais</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Por que nos escolher?</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-xl font-bold mb-2">Profissionais Experientes</h3>
            <p class="text-gray-600">Nossa equipe é altamente qualificada e atualizada com as últimas tendências</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-2">Ambiente Acolhedor</h3>
            <p class="text-gray-600">Um espaço moderno e confortável para sua transformação</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-2">Produtos Premium</h3>
            <p class="text-gray-600">Utilizamos apenas os melhores produtos do mercado</p>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-2">Agendamento Online</h3>
            <p class="text-gray-600">Praticidade para marcar seu horário quando quiser</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {} 