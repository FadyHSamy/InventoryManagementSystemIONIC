import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeIconComponent } from "../font-awesome-icon/font-awesome-icon.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter } from 'rxjs';

const MINIMUM_LENGTH = 2;

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [FontAwesomeIconComponent,CommonModule,ReactiveFormsModule],
})
export class SearchbarComponent  implements OnInit {
  @Input({required:false}) placeholder:string = '';
  @Input({required:false}) button:boolean = false;
  @Output() searchResult = new EventEmitter<string>();



  private searchValueSubject = new BehaviorSubject<string>('');
  searchValue$ = this.searchValueSubject.asObservable();

  constructor() { }

  ngOnInit() {
    this.searchValue$
      .pipe(
        filter(searchTerm => searchTerm.length  > MINIMUM_LENGTH),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((result) => {
        if(!this.button){
          this.searchResult.emit(result);
        }
      });
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchValueSubject.next(value);
  }

  onSearch(): void {
    if(this.searchValueSubject.value.length > MINIMUM_LENGTH){
      this.searchResult.emit(this.searchValueSubject.value);
    }
  }
}
