using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestClases.DB;
using Microsoft.EntityFrameworkCore;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.Controllers
{
    [ApiController]
    [Route("api/alumno")]
    public class AlumnoController : ControllerBase
    {
        IMapper _mapper;
        ClasesContext _context;
        public AlumnoController(ClasesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetAllAlumnos")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var Alumnos = await _context.Alumnos.ToListAsync();
                return Ok(Alumnos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            try
            {
                var Alumno = await _context.Alumnos.FindAsync(Id);
                return Ok(Alumno);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] AlumnoDto alumno)
        {
            try
            {
                var createItem = _mapper.Map<Alumno>(alumno);

                await _context.Alumnos.AddAsync(createItem);
                await _context.SaveChangesAsync();

                return Ok(alumno);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("Id")]
        public async Task<IActionResult> Update(int Id, AlumnoDto alumno)
        {
            try
            {
                var updateItem = await _context.Alumnos.FindAsync(Id);
                updateItem.Nombre = alumno.Nombre;
                updateItem.Apellido = alumno.Apellido;

                await _context.SaveChangesAsync();

                return Ok(alumno);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int Id)
        {

            try
            {
                await _context.Database.ExecuteSqlRawAsync("EXEC SP_EliminarAlumno {0}", Id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{AlumnoId}/{ClaseId}")]
        public async Task<IActionResult> QuitarAlumnoClase(int AlumnoId, int ClaseId)
        {

            try
            {
                var deleteItem = await _context.ClaseAlumnos.Where(c => c.AlumnoId == AlumnoId && c.ClaseId == ClaseId).ToListAsync();
                _context.RemoveRange(deleteItem);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}