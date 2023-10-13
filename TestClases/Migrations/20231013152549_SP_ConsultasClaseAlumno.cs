using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestClases.Migrations
{
    /// <inheritdoc />
    public partial class SP_ConsultasClaseAlumno : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
               @"CREATE PROCEDURE SP_AlumnosPorClase
                    @claseId INT
                AS
                BEGIN
                    SELECT a.*
                    FROM ClaseAlumnos cl
                    INNER JOIN Clases c on cl.ClaseId = c.ClaseId
                    INNER JOIN Alumnos a on cl.AlumnoId = a.AlumnoId
                    INNER JOIN Materias m on c.MateriaId = m.MateriaId
                    INNER JOIN Profesores p on c.ProfesorId = p.ProfesorId
                    WHERE c.ClaseId = @claseId;
                END"
           );

            migrationBuilder.Sql(
             @"CREATE PROCEDURE SP_ClasesPorAlumno
                    @alumnoId INT
                AS
                BEGIN
                    SELECT c.Nombre as Clase, m.Nombre as Materia, CONCAT(p.Nombre, ' ', p.Apellido) as Profesor
                    FROM ClaseAlumnos cl
                    INNER JOIN Clases c on cl.ClaseId = c.ClaseId
                    INNER JOIN Alumnos a on cl.AlumnoId = a.AlumnoId
                    INNER JOIN Materias m on c.MateriaId = m.MateriaId
                    INNER JOIN Profesores p on c.ProfesorId = p.ProfesorId
                    WHERE a.AlumnoId = @alumnoId;
                END"
         );

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP PROCEDURE SP_ClasesPorAlumno");
            migrationBuilder.Sql("DROP PROCEDURE SP_AlumnosPorClase");

        }
    }
}
