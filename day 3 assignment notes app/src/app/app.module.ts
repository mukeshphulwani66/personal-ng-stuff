import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NotesCompComponent } from './notes-comp/notes-comp.component';
import { NoteItemComponent } from './notes-comp/note-item/note-item.component';
import { NoteDetailComponent } from './notes-comp/note-item/note-detail/note-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    NotesCompComponent,
    NoteItemComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
