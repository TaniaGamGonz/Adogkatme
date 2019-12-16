import { Component, OnInit } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  ngOnInit() {

    this.dropdownList = [
      { id: 1, itemName: "India" },
      { id: 2, itemName: "Singapore" },
      { id: 3, itemName: "Australia" },
      { id: 4, itemName: "Canada" },
      { id: 5, itemName: "South Korea" },
      { id: 6, itemName: "Germany" },
      { id: 7, itemName: "France" },
      { id: 8, itemName: "Russia" },
      { id: 9, itemName: "Italy" },
      { id: 10, itemName: "Sweden" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Selecciona tu provincia",
      selectAllText: "Selecciona todos",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: ""
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
