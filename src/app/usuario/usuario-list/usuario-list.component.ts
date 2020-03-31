import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from '../usuario.service'
import {MatPaginator} from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[];
  displayedColumns: string[] = ['id','nome','cpf','email','telefone','nascimento','sexo','role','Opcoes'];

  dataSource = new MatTableDataSource(this.usuarios);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.list();
    this.dataSource.paginator = this.paginator;
  }
  list() {
    this.usuarioService.list().subscribe(dados => {
      this.usuarios = dados;
      this.dataSource.data = this.usuarios;
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEdit(id){
    this.router.navigate(['usuarioEditar', id]);
    // abrir pop-up mostrando cadastro completo passivel de editar

  }
  excluir(id){
    this.openDialog(id);
  }
  openSnackBar() {
   const message= "Deletado com sucesso", action= "delete";
    this._snackBar.open(message, action, {
      duration: 2100,
    });
  }

  openDialog(idd) {
    const dialogRef = this.dialog.open(PopUpDeleteComponent, {
      width: '350px',
      data:{id:idd}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.openSnackBar();
      this.list();
    });
  }
}
// componente da pop-up
@Component({
  selector: 'app-pop-up-delete',
  templateUrl: 'pop-up-delete.html',
})
export class PopUpDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<PopUpDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
     private usuarioService: UsuarioService
     ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ok(): void{
    console.log(this.usuario.id);
    this.usuarioService.remove(this.usuario.id).subscribe(
     success => {console.log('deletado com sucesso!')},
     error => console.error(error),
     () => console.log('request delete completo')
     )
    this.dialogRef.close();
  }

}
