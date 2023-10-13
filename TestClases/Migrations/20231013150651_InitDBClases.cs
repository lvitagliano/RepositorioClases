using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestClases.Migrations
{
    /// <inheritdoc />
    public partial class InitDBClases : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alumnos",
                columns: table => new
                {
                    AlumnoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastUpdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alumnos", x => x.AlumnoId);
                });

            migrationBuilder.CreateTable(
                name: "Materias",
                columns: table => new
                {
                    MateriaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastUpdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Materias", x => x.MateriaId);
                });

            migrationBuilder.CreateTable(
                name: "Profesores",
                columns: table => new
                {
                    ProfesorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastUpdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profesores", x => x.ProfesorId);
                });

            migrationBuilder.CreateTable(
                name: "Clases",
                columns: table => new
                {
                    ClaseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProfesorId = table.Column<int>(type: "int", nullable: false),
                    MateriaId = table.Column<int>(type: "int", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastUpdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clases", x => x.ClaseId);
                    table.ForeignKey(
                        name: "FK_Clases_Materias_MateriaId",
                        column: x => x.MateriaId,
                        principalTable: "Materias",
                        principalColumn: "MateriaId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Clases_Profesores_ProfesorId",
                        column: x => x.ProfesorId,
                        principalTable: "Profesores",
                        principalColumn: "ProfesorId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClaseAlumnos",
                columns: table => new
                {
                    ClaseAlumnoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClaseId = table.Column<int>(type: "int", nullable: false),
                    AlumnoId = table.Column<int>(type: "int", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClaseAlumnos", x => x.ClaseAlumnoId);
                    table.ForeignKey(
                        name: "FK_ClaseAlumnos_Alumnos_AlumnoId",
                        column: x => x.AlumnoId,
                        principalTable: "Alumnos",
                        principalColumn: "AlumnoId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClaseAlumnos_Clases_ClaseId",
                        column: x => x.ClaseId,
                        principalTable: "Clases",
                        principalColumn: "ClaseId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClaseAlumnos_AlumnoId",
                table: "ClaseAlumnos",
                column: "AlumnoId");

            migrationBuilder.CreateIndex(
                name: "IX_ClaseAlumnos_ClaseId",
                table: "ClaseAlumnos",
                column: "ClaseId");

            migrationBuilder.CreateIndex(
                name: "IX_Clases_MateriaId",
                table: "Clases",
                column: "MateriaId");

            migrationBuilder.CreateIndex(
                name: "IX_Clases_ProfesorId",
                table: "Clases",
                column: "ProfesorId");

            migrationBuilder.Sql(@"
             CREATE PROCEDURE [dbo].[SP_GuardarAlumnosEnClase]
             (
                 @ClaseId INT,
                 @AlumnoId INT
             )
             AS
             BEGIN
                 -- Comprobar si la clase existe
                 IF NOT EXISTS (SELECT * FROM Clases WHERE ClaseId = @ClaseId)
                 BEGIN
                     RAISERROR('La clase no existe.', 16, 1)
                     RETURN
                 END
                 -- Comprobar si el alumno existe
                 IF NOT EXISTS (SELECT * FROM Alumnos WHERE AlumnoId = @AlumnoId)
                 BEGIN
                     RAISERROR('El alumno no existe.', 16, 1)
                     RETURN
                 END
                 -- Comprobar si el alumno ya está en la clase
                 IF EXISTS (SELECT * FROM ClaseAlumnos WHERE ClaseId = @ClaseId AND AlumnoId = @AlumnoId)
                 BEGIN
                     RAISERROR('El alumno ya está en la clase.', 16, 1)
                     RETURN
                 END
                 -- Comprobar si la clase tiene menos de 20 alumnos
                 IF (SELECT COUNT(*) FROM ClaseAlumnos WHERE ClaseId = @ClaseId) >= 20
                 BEGIN
                     RAISERROR('La clase ya tiene 20 alumnos.', 16, 1)
                     RETURN
                 END
                 -- Insertar el alumno en la clase
                 INSERT INTO ClaseAlumnos (ClaseId, AlumnoId, Active)
                 VALUES (@ClaseId, @AlumnoId, 1)
             END
        ");
            migrationBuilder.Sql(@"
                CREATE PROCEDURE SP_EliminarAlumno(
                  @idAlumno INT
                )
                AS
                BEGIN
                  -- Eliminar el alumno de la tabla ClaseAlumnos
                  DELETE FROM ClaseAlumnos
                  WHERE AlumnoId = @idAlumno
                  -- Eliminar el alumno de la tabla Alumnos
                  DELETE FROM Alumnos
                  WHERE AlumnoId = @idAlumno
                END
        ");
            migrationBuilder.Sql(@"
                CREATE PROCEDURE SP_EliminarClase(
                  @idClase INT
                )
                AS
                BEGIN
                  -- Eliminar clase de la tabla ClaseAlumnos
                  DELETE FROM ClaseAlumnos
                  WHERE ClaseId = @idClase
                  -- Eliminar la clase de la tabla Clases
                  DELETE FROM Clases
                  WHERE ClaseId = @idClase
                END
        ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClaseAlumnos");

            migrationBuilder.DropTable(
                name: "Alumnos");

            migrationBuilder.DropTable(
                name: "Clases");

            migrationBuilder.DropTable(
                name: "Materias");

            migrationBuilder.DropTable(
                name: "Profesores");

            migrationBuilder.Sql("DROP PROCEDURE SP_EliminarClase");
            migrationBuilder.Sql("DROP PROCEDURE SP_EliminarAlumno");
            migrationBuilder.Sql("DROP PROCEDURE SP_GuardarAlumnosEnClase");
        }
    }
}
