import { Component } from '@angular/core';
import { GestioneDatiServiceService } from '../gestione-dati-service.service';

@Component({
  selector: 'app-contacts-list',
  imports: [],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class PersonaComponent {
  
  // Variabili per il form
  nome: string = '';
  cognome: string = '';
  numeroDiTelefono: string = '';

  // Ottieni l'array di persone dal servizio
  persone: Persona[] = [];

  constructor(private personaService: GestioneDatiServiceService) {}

  // Aggiungi una persona
  aggiungiPersona(): void {
    if (this.nome && this.cognome && this.numeroDiTelefono) {
      const nuovaPersona: Persona = {
        nome: this.nome,
        cognome: this.cognome,
        numeroDiTelefono: this.numeroDiTelefono
      };

      this.personaService.aggiungiPersona(nuovaPersona);
      this.persone = this.personaService.getPersone();

      // Resetta i campi del form
      this.nome = '';
      this.cognome = '';
      this.numeroDiTelefono = '';
    }
  }

  // Rimuovi una persona
  rimuoviPersona(index: number): void {
    this.personaService.rimuoviPersona(index);
    this.persone = this.personaService.getPersone();
  }
}

export interface Persona {
  nome: String;
  cognome: String;
  numeroDiTelefono: String;
}