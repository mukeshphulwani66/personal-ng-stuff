import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes-comp',
  templateUrl: './notes-comp.component.html',
})
export class NotesCompComponent {

  notes:Note[] = [
    {id:1,title:"Shopping",body:"to buy jeans"},
    {id:2,title:"Insurance",body:"to renew car insurance"},
    {id:3,title:"grocery",body:"to buy the pulses"},
  ]

}
