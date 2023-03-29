import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: any[] = [];


  ngOnInit(): void {
    this.skills = [
      {
        NOMBRE: ".NET",
        DESCRIPCION: "2 años de experiencia"
      },
      {
        NOMBRE: "ANGULAR",
        DESCRIPCION: "2 años de experiencia"
      },
      {
        NOMBRE: "SQL SERVER",
        DESCRIPCION: "2 años de experiencia"
      },
      {
        NOMBRE: "DESARROLLO DE API",
        DESCRIPCION: "2 años de experiencia"
      },
      {
        NOMBRE: "MACHINE LEARNING",
        DESCRIPCION: "Experiencia por proyectos personales"
      },
      {
        NOMBRE: "ERP",
        DESCRIPCION: "2 años de experiencia"
      },
    ]
  }
}
