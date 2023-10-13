import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoClasesComponent } from './components/listado-clases/listado-clases.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { ListadoProfesoresComponent } from './components/listado-profesores/listado-profesores.component';
import { ListadoMateriasComponent } from './components/listado-materias/listado-materias.component';
import { FormularioAltaClaseComponent } from './components/formulario-alta-clase/formulario-alta-clase.component';
import { FormularioAltaAlumnoComponent } from './components/formulario-alta-alumno/formulario-alta-alumno.component';
import { FormularioAltaMateriaComponent } from './components/formulario-alta-materia/formulario-alta-materia.component';
import { FormularioAltaProfesorComponent } from './components/formulario-alta-profesor/formulario-alta-profesor.component';
import { FormularioAltaAlumnoClaseComponent } from './components/formulario-alta-alumno-clase/formulario-alta-alumno-clase.component';
import { ListadoAlumnoPorClaseComponent } from './components/listado-alumno-por-clase/listado-alumno-por-clase.component';
import { ListadoClasePorAlumnoComponent } from './components/listado-clase-por-alumno/listado-clase-por-alumno.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ClasesPorAlumnoComponent } from './components/clases-por-alumno/clases-por-alumno.component';
import { AlumnoPorClaseComponent } from './components/alumno-por-clase/alumno-por-clase.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoClasesComponent,
    NavbarComponent,
    SpinnerComponent,
    ListadoAlumnosComponent,
    ListadoProfesoresComponent,
    ListadoMateriasComponent,
    FormularioAltaClaseComponent,
    FormularioAltaAlumnoComponent,
    FormularioAltaMateriaComponent,
    FormularioAltaProfesorComponent,
    FormularioAltaAlumnoClaseComponent,
    ListadoAlumnoPorClaseComponent,
    ListadoClasePorAlumnoComponent,
    AlumnosComponent,
    ProfesoresComponent,
    MateriasComponent,
    ClasesComponent,
    ClasesPorAlumnoComponent,
    AlumnoPorClaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
