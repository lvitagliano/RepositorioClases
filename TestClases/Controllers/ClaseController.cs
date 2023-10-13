using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestClases.DB;
using Microsoft.EntityFrameworkCore;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;
using System.Collections.Generic;

namespace TestClases.Controllers
{
    [ApiController]
    [Route("api/clase")]
    public class ClaseController : ControllerBase
    {
        IMapper _mapper;
        ClasesContext _context;
        public ClaseController(ClasesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetAllClases")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                ListaAlumnosPorClaseDto listaAlumnosPorClase = new ListaAlumnosPorClaseDto();

                var clases = await _context.Clases.Include(p => p.Profesor).DefaultIfEmpty().Include(m => m.Materia).DefaultIfEmpty().DefaultIfEmpty().ToListAsync();

                return Ok(clases);
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
                var clase = await _context.Clases.Include(p => p.Profesor).DefaultIfEmpty().Include(m => m.Materia).DefaultIfEmpty().FirstAsync(c => c.ClaseId == Id);
                return Ok(clase);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] ClaseDto clase)
        {
            try
            {
                var createItem = _mapper.Map<Clase>(clase);

                await _context.Clases.AddAsync(createItem);
                await _context.SaveChangesAsync();

                return Ok(clase);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("Id")]
        public async Task<IActionResult> Update(int Id, ClaseDto clase)
        {
            try
            {
                var updateItem = await _context.Clases.FindAsync(Id);
                updateItem.Nombre = clase.Nombre;
                updateItem.ProfesorId = clase.ProfesorId;
                updateItem.MateriaId = clase.MateriaId;

                await _context.SaveChangesAsync();

                return Ok(clase);

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
                await _context.Database.ExecuteSqlRawAsync("EXEC SP_EliminarClase {0}", Id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpPost("{ClaseId}/{AlumnoId}")]
        public async Task<IActionResult> InsertAlumnoClase(int ClaseId, int AlumnoId)
        {
            try
            {
                await _context.Database.ExecuteSqlRawAsync("EXEC SP_GuardarAlumnosEnClase {0}, {1}", ClaseId, AlumnoId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}