using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestClases.DB.Models.Dtos
{
    public class ClaseAlumnoDto
    {
        public int AlumnoId { get; set; }
        public int ClaseId { get; set; }
        public bool Active { get; set; } = true;

    }

    public class ListaClasesPorAlumnoDto
    {
        public string Alumno { get; set; }
        public List<ClasesPorAlumnoDto> Clases { get; set; }

    }

    public class ListaAlumnosPorClaseDto
    {
        public string Clase { get; set; }
        public string Profesor { get; set; }
        public string Materia { get; set; }
        public List<AlumnosPorClaseDto> Alumnos { get; set; }

    }

    public class ClasesPorAlumnoDto
    {
        public string Clase { get; set; }
        public string Profesor { get; set; }
        public string Materia { get; set; }

    }

    public class AlumnosPorClaseDto
    {
        public dynamic Alumno { get; set; }

    }
}
