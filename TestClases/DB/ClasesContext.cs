using Microsoft.EntityFrameworkCore;
using TestClases.DB.Models;

namespace TestClases.DB
{
    public class ClasesContext: DbContext
    {
        public ClasesContext(DbContextOptions<ClasesContext> options)
        : base(options)
        {
            
        }
        public DbSet<Clase> Clases { get; set; }
        public DbSet<Profesor> Profesores { get; set; }
        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Materia> Materias { get; set; }
        public DbSet<ClaseAlumno> ClaseAlumnos { get; set; }
        public DbSet<ClasesPorAlumno> ClasesPorAlumnos { get; set; }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        
        }

    }
}