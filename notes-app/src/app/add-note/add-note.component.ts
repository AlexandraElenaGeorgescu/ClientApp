import { Category } from './../models/category';
import { NoteService } from './../services/note.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  title: string;
  description: string;
  idCategoryNote: string;

  categories: Category[];
  constructor(private router: Router, private filterService: FilterService, private noteService: NoteService) { }
   
  ngOnInit(): void {
    this.categories = this.filterService.getFilters();
  
  }

  add() {
     
     this.noteService.addNote(this.title,this.description,this.idCategoryNote).subscribe(() => this.router.navigateByUrl(''));
     //this.noteService.editNote(this.title, this.description, this.idCategoryNote);
}
}
