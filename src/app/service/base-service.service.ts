import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected apiUrl: string;

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

}
