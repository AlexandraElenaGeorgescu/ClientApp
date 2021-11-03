import { NoteService } from './../services/note.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { Router } from '@angular/router';
import { title } from 'process';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  @Input() selectedCategoryId: string;
 // notes: Observable<Note[]>;
  notes: Note[];
  constructor(private router: Router, private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
      
}

  ngOnChanges() {
    if (this.selectedCategoryId) {
      this.noteService.getFilteredNotes(this.selectedCategoryId).subscribe((result) => {
        this.notes = result;
      })
     // this.notes = this.noteService.getFilteredNotes(this.selectedCategoryId);
      
    }
  }

deleteNote(id:string){
     this.noteService.deleteNote(id).
     subscribe((r) => 
     {
     this.notes = this.notes.filter(note => note.id !== id)
    })
   // this.noteService.deleteNote(id).pipe(map(() => this.notes ))
 }

getNotes(){
      this.noteService.getNotes().subscribe((result)=> {
      this.notes = result;
  })
 // this.notes=this.noteService.getNotes();
}
editNote(id, title, description, idCategoryNote){
   this.noteService.editNode(id, title, description, idCategoryNote).subscribe(() =>
   this.notes = this.notes.filter(note => note.id !== id));
   this.router.navigateByUrl('');
  
}
}
