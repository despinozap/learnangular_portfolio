import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public infoPageService: InfoPageService, private router: Router) {}

    ngOnInit(): void {
    }

    public searchProduct(name: string) {
        if(name.length < 1)
        {
            return;
        }
        else
        {
            this.router.navigate(['/search', name]);
        }
    }
}
