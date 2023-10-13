using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestClases.DB.Models
{
    public class ClasesPorAlumno
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClaseAlumnoId { get; set; }
        public string Clase { get; set; }
        public string Materia { get; set; }
        public string Profesor { get; set; }

    }
}
