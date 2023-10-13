using Microsoft.AspNetCore.Mvc;
using TestClases.DB;
using Microsoft.EntityFrameworkCore;

namespace TestClases.Controllers
{
    [ApiController]
    [Route("api/ClasesPorAlumno")]
    public class ClasesPorAlumnoController : ControllerBase
    {
        ClasesContext _context;
        public ClasesPorAlumnoController(ClasesContext context)
        {
            _context = context;
        }

        [HttpGet("{AlumnoId}")]
        public async Task<IActionResult> GetClasePorAlumno(int AlumnoId)
        {
            try
            {

                var clases = _context.ClasesPorAlumnos.FromSqlInterpolated($"EXEC SP_ClasesPorAlumno @alumnoId={AlumnoId}").AsAsyncEnumerable();

                return Ok(clases);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


     }
}