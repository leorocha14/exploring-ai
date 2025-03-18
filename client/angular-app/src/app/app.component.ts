import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <!-- Header/Navbar -->
    <nav class="bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a routerLink="/home" class="text-xl font-bold">Barbearia Style</a>
          </div>
          <div class="hidden md:flex space-x-8">
            <a routerLink="/home" routerLinkActive="text-yellow-500" class="hover:text-yellow-500 transition-colors">Home</a>
            <a routerLink="/servicos" routerLinkActive="text-yellow-500" class="hover:text-yellow-500 transition-colors">Serviços</a>
            <a routerLink="/agendamento" routerLinkActive="text-yellow-500" class="hover:text-yellow-500 transition-colors">Agendar</a>
            <a routerLink="/contato" routerLinkActive="text-yellow-500" class="hover:text-yellow-500 transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-outlet></router-outlet>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">Barbearia Style</h3>
            <p>Seu estilo, nossa especialidade.</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">Horário de Funcionamento</h3>
            <p>Segunda a Sábado: 9h às 20h</p>
            <p>Domingo: Fechado</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">Contato</h3>
            <p>Telefone: (11) 9999-9999</p>
            <p>Email: contato&#64;barbeariastyle.com</p>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p>&copy; 2024 Barbearia Style. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Barbearia Style';
}
