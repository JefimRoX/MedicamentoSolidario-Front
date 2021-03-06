import { MedicamentoListComponent } from "./medicamento/medicamento-list/medicamento-list.component";
import { MedicamentoResolverGuard } from "./guards/medicamento-resolver.guard";
import { MedicamentoFormComponent } from "./medicamento/medicamento-form/medicamento-form.component";
import { PontoResolverGuard } from "./guards/ponto-resolver.guard";
import { UsuarioResolverGuard } from "./guards/usuario-resolver.guard";
import { PontoColetaListComponent } from "./ponto-de-coleta/ponto-coleta-list/ponto-coleta-list/ponto-coleta-list.component";
import { PontoColetaInsertComponent } from "./ponto-de-coleta/ponto-coleta-insert/ponto-coleta-insert.component";
import { UsuarioInsertComponent } from "./usuario/usuario-insert/usuario-insert.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioListComponent } from "./usuario/usuario-list/usuario-list.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ReceberMedicamentoComponent } from "./receber-medicamento/receber-medicamento.component";
import { PedidoPontoComponent } from './pedido-medicamento/pedido-ponto/pedido-ponto.component'
import { ComfirmaCpfComponent } from "./receber-medicamento/comfirma-cpf/comfirma-cpf.component"
import { RecuperarSenhaComponent } from './usuario/recuperar-senha/recuperar-senha.component';
import { UsuarioPerfilComponent } from './usuario/usuario-perfil/usuario-perfil.component';
import { PedidoMedicamentoComponent } from "./pedido-medicamento/pedido-medicamento/pedido-medicamento.component"
import { PedidoUsuarioComponent } from './pedido-medicamento/pedido-usuario/pedido-usuario.component';
import { SaidaPontoComponent } from "./pedido-saida/saida-ponto/saida-ponto.component"
import { SaidaListaComponent } from "./pedido-saida/saida-lista/saida-lista.component"
import { SaidaMedicamentoComponent } from './pedido-saida/saida-medicamento/saida-medicamento.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "usuarioCadastro",
    component: UsuarioInsertComponent,
    resolve: { usuario: UsuarioResolverGuard },
  },
  {
    path: "usuarioEditar/:id",
    component: UsuarioInsertComponent,
    resolve: { usuario: UsuarioResolverGuard },
  },
  { path: "usuarioLista", component: UsuarioListComponent },
  {
    path: "pontoColetaCadastro",
    component: PontoColetaInsertComponent,
    resolve: { pontoColeta: PontoResolverGuard },
  },
  {
    path: "pontoColetaEditar/:id",
    component: PontoColetaInsertComponent,
    resolve: { pontoColeta: PontoResolverGuard },
  },
  { path: "pontoColetaList", component: PontoColetaListComponent },
  {
    path: "medicamentoInserir",
    component: MedicamentoFormComponent,
    resolve: { medicamento: MedicamentoResolverGuard },
  },
  {
    path: "medicamentoEditar/:id",
    component: MedicamentoFormComponent,
    resolve: { medicamento: MedicamentoResolverGuard },
  },
  {
    path: "usuarioPefil/:id",
    component: UsuarioPerfilComponent,
    resolve: { usuario: UsuarioResolverGuard },
  },
  { path: "medicamentoLista", component: MedicamentoListComponent },
  { path: "receberMedicamento/:id/:nome", component: ReceberMedicamentoComponent },
  { path: "saidaMedicamento", component: SaidaPontoComponent },
  { path: "pedido", component: PedidoPontoComponent },
  { path: "pedidoMedicamento/:id/:nome", component: PedidoMedicamentoComponent },
  { path: "verificaCpf", component: ComfirmaCpfComponent },
  { path: "recureparSenha", component: RecuperarSenhaComponent },
  { path: "meusPedidos", component: PedidoUsuarioComponent },
  { path: "pedidosLista/:id", component: SaidaListaComponent },
  { path: "pedidoMedicamento", component: SaidaMedicamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
