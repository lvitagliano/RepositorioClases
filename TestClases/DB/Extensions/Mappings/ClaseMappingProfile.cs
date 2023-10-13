using AutoMapper;
using TestClases.DB.Models;
using TestClases.DB.Models.Dtos;

namespace TestClases.DB.Extensions.Mappings
{
    public class ClaseMappingProfile : Profile
    {
        public ClaseMappingProfile() {
            CreateMap<ClaseDto, Clase>();

            CreateMap<ClaseDto, Clase>().ReverseMap();
        }
    }
}
