import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  { path: 'add-note', component: AddNoteComponent },
  { path: 'edit-note/:id', component: EditNoteComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
