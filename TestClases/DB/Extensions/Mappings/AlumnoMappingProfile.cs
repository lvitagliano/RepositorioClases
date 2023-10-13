using AutoMapper;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.DB.Extensions.Mappings
{
    public class AlumnoMappingProfile : Profile
    {
        public AlumnoMappingProfile() {
            CreateMap<AlumnoDto, Alumno>();

            CreateMap<AlumnoDto, Alumno>().ReverseMap();

            CreateMap<AlumnoSmallDto, Alumno>();

            CreateMap<AlumnoSmallDto, Alumno>().ReverseMap();
        }
    }
}
