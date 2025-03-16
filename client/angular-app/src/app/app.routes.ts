import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'agendamento', loadComponent: () => import('./pages/agendamento/agendamento.component').then(m => m.AgendamentoComponent) },
    { path: 'servicos', loadComponent: () => import('./pages/servicos/servicos.component').then(m => m.ServicosComponent) },
    { path: 'contato', loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent) }
];
