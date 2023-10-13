
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestClases.DB.Extensions.Mappings;

namespace TestClases.DB.Extensions
{
    public static class ServiceExtension
    {
        public static void ConfigureMapping(this IServiceCollection services)
        {
            services.Configure<ApiBehaviorOptions>(options => { options.SuppressModelStateInvalidFilter = true; });
            var mapperConfig = new MapperConfiguration(map =>
            {
                map.AddProfile<AlumnoMappingProfile>();
                map.AddProfile<ClaseMappingProfile>();
                map.AddProfile<ProfesorMappingProfile>();
                map.AddProfile<MateriaMappingProfile>();
                map.AddProfile<ClaseAlumnosMappingProfile>();
            });
            services.AddSingleton(mapperConfig.CreateMapper());
        }

    }
}