import { MedicamentoListComponent } from "./Medicamento/medicamento-list/medicamento-list.component";
import { MedicamentoResolverGuard } from "./guards/medicamento-resolver.guard";
import { MedicamentoFormComponent } from "./Medicamento/medicamento-form/medicamento-form.component";
import { PontoResolverGuard } from "./guards/ponto-resolver.guard";
import { UsuarioResolverGuard } from "./guards/usuario-resolver.guard";
import { PontoColetaListComponent } from "./PontoColeta/ponto-coleta-list/ponto-coleta-list/ponto-coleta-list.component";
import { PontoColetaInsertComponent } from "./PontoColeta/ponto-coleta-insert/ponto-coleta-insert.component";
import { UsuarioInsertComponent } from "./usuario/usuario-insert/usuario-insert.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioListComponent } from "./usuario/usuario-list/usuario-list.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ReceberMedicamentoComponent } from "./receber-medicamento/receber-medicamento.component";
import { ListMedicamentosComponent } from "./list-medicamentos/list-medicamentos.component";
import { ComfirmaCpfComponent } from "./comfirma-cpf/comfirma-cpf.component"

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
  { path: "medicamentoLista", component: MedicamentoListComponent },
  { path: "receberMedicamento/:id/:nome", component: ReceberMedicamentoComponent },
  { path: "list-medicamentos", component: ListMedicamentosComponent },
  { path: "verificaCpf", component: ComfirmaCpfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
