import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroFinalizadoComponent } from './pages/cadastro-finalizado/cadastro-finalizado.component';
import { AnaliseComponent } from './pages/analise/analise.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "cadastro/endereco",
        component: CadastroComponent
    },
    {
        path: "cadastro/cartao",
        component: CadastroComponent
    },
    {
        path: "cadastro-finalizado",
        component: CadastroFinalizadoComponent
    },
    {
        path: "analise",
        component: AnaliseComponent
    },
];
