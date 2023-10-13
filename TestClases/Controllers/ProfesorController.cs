using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestClases.DB;
using Microsoft.EntityFrameworkCore;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.Controllers
{
    [ApiController]
    [Route("api/profesor")]
    public class ProfesorController : ControllerBase
    {
        IMapper _mapper;
        ClasesContext _context;
        public ProfesorController(ClasesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetAllProfesores")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var Profesores = await _context.Profesores.ToListAsync();
                return Ok(Profesores);
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
                var Profesor = await _context.Profesores.FindAsync(Id);
                return Ok(Profesor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] ProfesorDto profesor)
        {
            try
            {
                var createItem = _mapper.Map<Profesor>(profesor);

                await _context.Profesores.AddAsync(createItem);
                await _context.SaveChangesAsync();

                return Ok(profesor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("Id")]
        public async Task<IActionResult> Update(int Id, ProfesorDto profesor)
        {
            try
            {
                var updateItem = await _context.Profesores.FindAsync(Id);
                updateItem.Nombre = profesor.Nombre;
                updateItem.Apellido = profesor.Apellido;
                
                await _context.SaveChangesAsync();

                return Ok(profesor);

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
                var deleteItem = await _context.Profesores.FindAsync(Id);
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