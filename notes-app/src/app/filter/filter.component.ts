import { FilterService } from './../services/filter.service';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitSelectedFilter = new EventEmitter<string>();
  categories: Category[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.categories = this.filterService.getFilters();
  }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
  }
}
