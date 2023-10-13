using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestClases.DB.Models
{
    public class ClaseAlumno
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClaseAlumnoId { get; set; }
        public int ClaseId { get; set; }
        public int AlumnoId { get; set; }

        [ForeignKey("AlumnoId")]
        public Alumno Alumno { get; set; }

        [ForeignKey("ClaseId")]
        public Clase Clase { get; set; }
        public bool Active { get; set; }


    }
}
