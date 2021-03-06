import { PontoColeta } from '../receber-medicamento/receber-medicamento.component';

export class Medicamento {
  dataValidade: string;
  id: number;
  idDoacaoIn: number;
  idDoacaoOut: number;
  nome: string;
  principio: string;
  quantidade: number;
  tarja: string;
  tipoArmazenamento: string;
  tipoReceita: string;
  data: string;
  qtdPedido?: number;
  pontoDeColeta?: PontoColeta;
  dataVencimento?: string;
}
