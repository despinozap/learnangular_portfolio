import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

    public info: InfoPage = {};
    public loaded: boolean = false;

    team: any = [];

    constructor(private http: HttpClient) { 
        this.loadInfo();
        this.loadTeam();
    }

    private loadInfo() {
        this.http.get('assets/data/data-pages.json').subscribe((resp: InfoPage) => {
            this.info = resp;
            this.loaded = true;
        });
    }

    private loadTeam() {
        this.http.get('https://angular-html-85e66.firebaseio.com/team.json').subscribe( (resp: any[]) => {
            this.team = resp;
        });
    }
}
