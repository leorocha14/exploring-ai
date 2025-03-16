import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-gray-100 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-12">Entre em Contato</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Formulário de Contato -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="nome">
                  Nome
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

              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  [(ngModel)]="formData.email"
                  name="email"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  required
                >
              </div>

              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="assunto">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  [(ngModel)]="formData.assunto"
                  name="assunto"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  required
                >
              </div>

              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="mensagem">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  [(ngModel)]="formData.mensagem"
                  name="mensagem"
                  rows="4"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <!-- Informações de Contato -->
          <div class="space-y-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <i class="fas fa-map-marker-alt text-yellow-500 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-bold">Endereço</h3>
                    <p class="text-gray-600">
                      Rua da Barbearia, 123<br>
                      Centro - São Paulo, SP<br>
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <i class="fas fa-phone text-yellow-500 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-bold">Telefone</h3>
                    <p class="text-gray-600">(11) 9999-9999</p>
                    <p class="text-gray-600">(11) 8888-8888</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <i class="fas fa-envelope text-yellow-500 text-xl mt-1"></i>
                  <div>
                    <h3 class="font-bold">E-mail</h3>
                    <p class="text-gray-600">contato&#64;barbeariastyle.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold mb-6">Horário de Funcionamento</h2>
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

            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold mb-6">Redes Sociais</h2>
              <div class="flex space-x-4">
                <a href="#" class="text-2xl text-gray-600 hover:text-yellow-500 transition-colors">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="text-2xl text-gray-600 hover:text-yellow-500 transition-colors">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-2xl text-gray-600 hover:text-yellow-500 transition-colors">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContatoComponent {
  formData = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  };

  onSubmit() {
    console.log('Dados do formulário:', this.formData);
    // Aqui você implementaria a lógica para enviar os dados para o backend
    alert('Mensagem enviada com sucesso!');
  }
} 