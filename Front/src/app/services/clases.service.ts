import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    const url = `https://localhost:7149/api/profesor/${id}`;
    return this.http.delete(url);
  }

  deleteAlumnoById(id: any){
    const url = `https://localhost:7149/api/alumno/${id}`;
    return this.http.delete(url);
  }

  deleteClaseById(id: any){
    const url = `https://localhost:7149/api/clase/${id}`;
    return this.http.delete(url);
  }

  deleteMateriaById(id: any){
    const url = `https://localhost:7149/api/materia/${id}`;
    return this.http.delete(url);
  }

  deleteAlumnoClaseById(id: any){
    const url = `https://localhost:7149/api/alumnosPorClase/${id}`;
    return this.http.delete(url);
  }

  crearClase(ClaseDto: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const apiUrl = this.BaseURL + 'clase/Create'; 

    return this.http.post(apiUrl, ClaseDto, { headers });
  }

  crearMateria(MateriaDto: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const apiUrl = this.BaseURL + 'materia/Create'; 

    return this.http.post(apiUrl, MateriaDto, { headers });
  }

  crearProfesor(ProfesorDto: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const apiUrl = this.BaseURL + 'profesor/Create'; 

    return this.http.post(apiUrl, ProfesorDto, { headers });
  }

  crearAlumno(AlumnoDto: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const apiUrl = this.BaseURL + 'alumno/Create'; 

    return this.http.post(apiUrl, AlumnoDto, { headers });
  }

  crearClaseAlumno(ClaseId: any, AlumnoId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const apiUrl = `https://localhost:7149/api/clase/${ClaseId}/${AlumnoId}`; 

    return this.http.post(apiUrl, { headers });
  }
}
