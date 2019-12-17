import { Component, OnInit, Input } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()
  dropdownList: [];
  @Input()
  singleSelection = true;
  @Input()
  text: String;
  constructor() { }

  selectedItems = [];
  dropdownSettings = {};


  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: this.singleSelection,
      enableCheckAll: this.singleSelection,
      text: this.text,
      selectAllText: "Selecciona todos",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "dropdown"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);

  }

}
