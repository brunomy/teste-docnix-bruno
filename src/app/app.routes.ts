import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroCartaoComponent } from './components/cadastro-cartao/cadastro-cartao.component';
import { CadastroFinalizadoComponent } from './pages/cadastro-finalizado/cadastro-finalizado.component';

export const routes: Routes = [
    {
        path: "login",
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
];
