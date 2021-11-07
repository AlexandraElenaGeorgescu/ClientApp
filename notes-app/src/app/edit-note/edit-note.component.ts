import { Category } from './../models/category';
import { NoteService } from './../services/note.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit, OnChanges{
  categories: Category[];
  notes: Note[];
  id:string;
  title: string;
  description: string;
  idCategoryNote: string;
  constructor(private router: Router, private filterService: FilterService, private noteService: NoteService) { }

  ngOnChanges() {
   
      
    }
  ngOnInit(): void {
    this.categories = this.filterService.getFilters(); 
    this.getNotes();
  }
  getNotes() {
     this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    })
  }
 
  update(id: string, notes: Note[]) {
    this.noteService.editNote(id, this.title, this.description, this.idCategoryNote).subscribe(
      ()=>{ this.notes = this.notes.filter(note => note.id !== id)
    });
     this.router.navigateByUrl('')
}}