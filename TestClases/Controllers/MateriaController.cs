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
    [Route("api/materia")]
    public class MateriaController : ControllerBase
    {
        IMapper _mapper;
        ClasesContext _context;
        public MateriaController(ClasesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetAllMaterias")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var Materias = await _context.Materias.ToListAsync();
                return Ok(Materias);
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
                var Materia = await _context.Materias.FindAsync(Id);
                return Ok(Materia);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] MateriaDto materia)
        {
            try
            {
                var createItem = _mapper.Map<Materia>(materia);

                await _context.Materias.AddAsync(createItem);
                await _context.SaveChangesAsync();

                return Ok(materia);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("Id")]
        public async Task<IActionResult> Update(int Id, MateriaDto materia)
        {
            try
            {
                var updateItem = await _context.Materias.FindAsync(Id);
                updateItem.Nombre = materia.Nombre;
                
                await _context.SaveChangesAsync();

                return Ok(materia);

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
                var deleteItem = await _context.Materias.FindAsync(Id);
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