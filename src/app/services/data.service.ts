import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  entityUrl = '/api/data';

  constructor(private http: HttpClient) { }


  /**
   * SERVICES :  Affichage de tout les projets
   * @returns    Return toute la liste des projets
   *
   * Exemple :
   * ```typescript
   * this.ProjetService.list().subscribe((datas: Array<projet>) => {});
   * ```
   */
  list() {
    return this.http.get(environment.url + this.entityUrl);
  }
}
