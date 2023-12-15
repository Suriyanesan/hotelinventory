import { Injectable, Inject } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {
  config(config: any): void {
    
  }

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log('ConfigService is Initialized');
    console.log(this.configToken);
  }
}
