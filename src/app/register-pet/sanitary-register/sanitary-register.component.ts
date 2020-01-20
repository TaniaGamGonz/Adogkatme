import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/core/models/pet';
import { FormService } from 'src/app/core/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanitary-register',
  templateUrl: './sanitary-register.component.html',
  styleUrls: ['./sanitary-register.component.scss']
})
export class SanitaryRegisterComponent implements OnInit {

  constructor(
    private formService: FormService,
    private router: Router,
  ) { }

  private pet: Pet;

  ngOnInit() {
    this.pet = new Pet({...this.formService.firstForm});
  }
  onSubmit(): void{
    this.formService.secondForm = this.pet;
    this.router.navigate(["/adopcion/sanitario/adicional"]);

  }
}
