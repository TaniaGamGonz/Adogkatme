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
  @Input()
  enableSearchFilter = true;
  @Input()
  classes:String;
  @Input()
  showCheckbox = true;
  constructor() { }

  selectedItems: Array<Object>;
  dropdownSettings: Object;


  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: this.singleSelection,
      enableCheckAll: this.singleSelection,
      text: this.text,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: this.enableSearchFilter,
      classes: `dropdown ,${this.classes}`,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: this.showCheckbox,
    };
  }
  onItemSelect(item: any) {
  }
  OnItemDeSelect(item: any) {
  }
  onSelectAll(items: any) {
  }
  onDeSelectAll(items: any) {

  }

}
