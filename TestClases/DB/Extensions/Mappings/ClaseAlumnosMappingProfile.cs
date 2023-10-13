using AutoMapper;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.DB.Extensions.Mappings
{
    public class ClaseAlumnosMappingProfile : Profile
    {
        public ClaseAlumnosMappingProfile() {
            CreateMap<ClaseAlumnoDto, ClaseAlumno>();

            CreateMap<ClaseAlumnoDto, ClaseAlumno>().ReverseMap();
        }
    }
}
