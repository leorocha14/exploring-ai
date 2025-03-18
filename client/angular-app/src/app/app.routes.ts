import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'servicos',
        loadComponent: () => import('./pages/servicos/servicos.component').then(m => m.ServicosComponent)
    },
    {
        path: 'corte-cabelo',
        loadComponent: () => import('./pages/corte-cabelo/corte-cabelo.component').then(m => m.CorteCabeloComponent)
    },
    {
        path: 'agendamento',
        loadComponent: () => import('./pages/agendamento/agendamento.component').then(m => m.AgendamentoComponent)
    },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'contato', loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent) }
];
