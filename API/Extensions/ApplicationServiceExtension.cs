
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            //adding service to our container
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            //adding service for CORS(Cross Origin Resource Sharing) implementation
            services.AddCors();

            //adding our own service for implementing token
            services.AddScoped<ITokenService, TokenService>();

            return services;
        }
    }
}