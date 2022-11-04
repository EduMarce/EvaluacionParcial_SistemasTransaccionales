import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Espacios } from '../models/espacios';
import { EspaciosService } from '../services/espacios.service';


@Component({
  selector: 'app-new-espacio',
  templateUrl: './new-espacio.component.html',
  styleUrls: ['./new-espacio.component.css']
})
export class NewEspacioComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private espaciosService: EspaciosService,
    private router: Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      estacionamiento: ['', [Validators.required, Validators.maxLength(70)]],
      piso: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      numero: ['', [Validators.required]],
    });
  }

  saveEspacios(): void {
    const espacio: Espacios = {
      id: 0,
      estacionamiento: this.myForm.get('estacionamiento')?.value,
      piso: this.myForm.get('piso')?.value,
      numero: this.myForm.get('numero')?.value,
      estado: this.myForm.get('estado')?.value,
    };

    this.espaciosService.addEspacios(espacio).subscribe({
      next: (data) => {
        this.snackBar.open("Registro de Espacio OK",'',{
          duration:3000,
        })
        this.router.navigate(['/espacios']);
      },
      error: (err) => {},
    });
  }
}
