import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11.00, name: 'Rosa' },
      { id: 12.00, name: 'Rosa Azul' },
      { id: 13.00, name: 'Cravo' },
      { id: 14.00, name: 'Ortência' },
      { id: 15.00, name: 'Margarida' },
    ];
    return { heroes };
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}