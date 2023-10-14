using Microsoft.AspNetCore.Mvc;
using TestClases.DB;
using Microsoft.EntityFrameworkCore;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;
using System.Data.SqlClient;
using AutoMapper;

namespace TestClases.Controllers
{
    [ApiController]
    [Route("api/AlumnosPorClase")]
    public class AlumnosPorClaseControlle : ControllerBase
    {
        IMapper _mapper;

        ClasesContext _context;
        public AlumnosPorClaseControlle(ClasesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }


        [HttpGet("{ClaseId}")]
        public async Task<IActionResult> GetAlumnoPorClase(int ClaseId)
        {
            try
            {
               var alumnos = _context.Alumnos.FromSqlInterpolated($"EXEC SP_AlumnosPorClase @claseId={ClaseId}").AsAsyncEnumerable();

                List<AlumnoSmallDto> smallDto = new List<AlumnoSmallDto>();

                await foreach (var item in alumnos)
                {
                    var alumno = _mapper.Map<AlumnoSmallDto>(item);
                    smallDto.Add(alumno);

                }


                return Ok(smallDto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{ClaseAlumnoId}")]
        public async Task<IActionResult> QuitarAlumnoClase(int ClaseAlumnoId)
        {

            try
            {
                var deleteItem = await _context.ClaseAlumnos.FindAsync(ClaseAlumnoId);
                _context.Remove(deleteItem);
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