import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@Component({
  selector: 'app-root',
  imports: [ContactsListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gestionale';
}