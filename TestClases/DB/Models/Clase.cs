using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestClases.DB.Models
{
    public class Clase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClaseId { get; set; }
        public string Nombre { get; set; }
        public int ProfesorId { get; set; }
        [ForeignKey(nameof(ProfesorId))]
        public Profesor Profesor { get; set; }
        public int MateriaId { get; set; }
        [ForeignKey(nameof(MateriaId))]
        public Materia Materia { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public DateTime LastUpdate { get; set; } = DateTime.Now;
        public bool Active { get; set; }

    }
}
