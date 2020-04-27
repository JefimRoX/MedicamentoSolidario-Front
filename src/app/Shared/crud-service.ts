import { Generico } from "./../models/Generico";
import { HttpClient } from "@angular/common/http";
import { delay, tap, take } from "rxjs/operators";

export class CrudService<T extends Generico> {
  constructor(protected http: HttpClient, private API_URL) { }

  list() {
    return this.http.get<T[]>(this.API_URL).pipe(delay(2000), tap(console.log));
  }
  loadByID(id) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  loadByCpf(cpf) {
    return this.http.get<T>(`${this.API_URL}/${cpf}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }
  private update(record: T) {
    return this.http.put(this.API_URL, record).pipe(take(1));
  }
  save(record: T) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }
  remove(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
