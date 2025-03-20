import { Injectable } from '@angular/core';
import { Persona } from './contacts-list/contacts-list.component';

@Injectable({
  providedIn: 'root'
})
export class GestioneDatiServiceService {

  private persone: Persona[] = [];

  // Aggiungi persona
  aggiungiPersona(persona: Persona): void {
    this.persone.push(persona);
  }

  // Rimuovi persona
  rimuoviPersona(index: number): void {
    this.persone.splice(index, 1);
  }

  // Ottieni tutte le persone
  getPersone(): Persona[] {
    return [...this.persone];
  }
}
