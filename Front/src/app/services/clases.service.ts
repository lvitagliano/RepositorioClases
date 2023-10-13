import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient) { }

  BaseURL = "https://localhost:7149/api/"
  getProfesores(){
    const URL = this.BaseURL + "profesor"
    return this.http.get(URL);
  }

  getAlumnos(){
    const URL = this.BaseURL + "alumno"
    return this.http.get(URL);
  }

  getClases(){
    const URL = this.BaseURL + "clase"
    return this.http.get(URL);
  }

  getMaterias(){
    const URL = this.BaseURL + "materia"
    return this.http.get(URL);
  }

  getProfesorById(id: any){
    const URL = this.BaseURL + "profesor/"+ id
    return this.http.get(URL);
  }

  getAlumnoById(id: any){
    const URL = this.BaseURL + "alumno/"+ id
    return this.http.get(URL);
  }

  getClaseById(id: any){
    const URL = this.BaseURL + "clase/"+ id
    return this.http.get(URL);
  }

  getMateriaById(id: any){
    const URL = this.BaseURL + "materia/"+ id
    return this.http.get(URL);
  }

  getAlumnosPorClaseById(id: any){
    const URL = this.BaseURL + "AlumnosPorClase/"+ id
    return this.http.get(URL);
  }

  getClasesPorAlumnoById(id: any){
    const URL = this.BaseURL + "ClasesPorAlumno/"+ id
    return this.http.get(URL);
  }

  deleteProfesorById(id: any){
    const URL = this.BaseURL + "profesor/"+ id
    return this.http.delete(URL);
  }

  deleteAlumnoById(id: any){
    const URL = this.BaseURL + "alumno/"+ id
    return this.http.delete(URL);
  }

  deleteClaseById(id: any){
    const URL = this.BaseURL + "clase/"+ id
    return this.http.delete(URL);
  }

  deleteMateriaById(id: any){
    const URL = this.BaseURL + "materia/"+ id
    return this.http.delete(URL);
  }
}
