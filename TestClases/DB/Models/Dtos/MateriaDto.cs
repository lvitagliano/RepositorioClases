using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestClases.DB.Models.Dtos
{
    public class MateriaDto
    {
        public string Nombre { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public DateTime LastUpdate { get; set; } = DateTime.Now;
        public bool Active { get; set; } = true;

    }
}

