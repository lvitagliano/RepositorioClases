using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestClases.DB.Models.Dtos
{
    public class ClaseDto
    {
        public string Nombre { get; set; }
        public int ProfesorId { get; set; }
        public int MateriaId { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public DateTime LastUpdate { get; set; } = DateTime.Now;
        public bool Active { get; set; } = true;

    }
}
