import { Component, OnInit, ViewChild } from '@angular/core';
import { NgControlStatus, NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // @Input() recibir un elemento que viene del componente padre
  // @Output() emitir un evento hacia los componentes hijos
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 1500,
    existencias:10

  }


  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid
           &&
           this.miFormulario?.controls.producto?.touched;
  }

  precioValido():boolean{
    // this.miFormulario?.controls?.precio?.setErrors({'precio':true});
    return this.miFormulario?.controls.precio?.touched
           &&
           this.miFormulario?.controls.precio?.value < 0
  }

  // guardar(miFormulario: NgForm){
  guardar(){
    console.log( this.miFormulario.value );
    console.log( "Posteo correcto " );

    this.miFormulario.resetForm({
      precio:0 ,
      existencias: 0
    });
  }

}
