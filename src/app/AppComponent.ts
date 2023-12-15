import { Component, ViewChild, ElementRef, OnInit, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotel';

  @ViewChild('name', { static: true })
  name!: ElementRef;

  constructor(
    private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: any,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log(configService.config);

  }

  ngOnInit(): void {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('navigation started');
    });
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)      
    ).subscribe((event) => {
      console.log("Navigation completed")
    })


    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Prince Hotel";
    this.localStorage.setItem('name', 'Prince Hotel ');
  }
}
