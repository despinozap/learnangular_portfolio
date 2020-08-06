import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

    private info: InfoPage = {};
    public loaded: boolean = false;

    constructor(private http: HttpClient) { 

        console.log('Service: InfoPage loaded');

        this.http.get('assets/data/data-pages.json').subscribe((resp: InfoPage) => {
            this.info = resp;
            this.loaded = true;
        });

    }
}