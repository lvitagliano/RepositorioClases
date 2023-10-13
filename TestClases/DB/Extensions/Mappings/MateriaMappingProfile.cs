using AutoMapper;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.DB.Extensions.Mappings
{
    public class MateriaMappingProfile : Profile
    {
        public MateriaMappingProfile() {
            CreateMap<MateriaDto, Materia>();

            CreateMap<MateriaDto, Materia>().ReverseMap();
        }
    }
}
