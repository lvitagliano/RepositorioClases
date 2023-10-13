using AutoMapper;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.DB.Extensions.Mappings
{
    public class ProfesorMappingProfile : Profile
    {
        public ProfesorMappingProfile() {
            CreateMap<ProfesorDto, Profesor>();

            CreateMap<ProfesorDto, Profesor>().ReverseMap();
        }
    }
}
