import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ListadoAlumnoPorClaseComponent } from './components/listado-alumno-por-clase/listado-alumno-por-clase.component';
import { ListadoClasePorAlumnoComponent } from './components/listado-clase-por-alumno/listado-clase-por-alumno.component';

const routes: Routes = [
  { path: 'profesores', component: ProfesoresComponent }, // Ruta raíz
  { path: 'alumnos', component: AlumnosComponent }, // Ruta raíz
  { path: 'materias', component: MateriasComponent }, // Ruta raíz
  { path: 'clases', component: ClasesComponent }, // Ruta raíz
  { path: 'clasesporalumno/:id', component: ListadoClasePorAlumnoComponent },
  { path: 'alumnosporclase/:id', component: ListadoAlumnoPorClaseComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
