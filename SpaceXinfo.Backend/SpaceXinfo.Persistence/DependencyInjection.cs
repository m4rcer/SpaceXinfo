using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SpaceXinfo.Application.Interfaces;

namespace SpaceXinfo.Persistence
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddPersistence(this IServiceCollection 
            services, IConfiguration configuration)
        {
            var connectionString = configuration["DbConnection"];
            services.AddDbContext<LaunchesDbContext>(options =>
            {
                options.UseSqlite(connectionString);
            });
            services.AddScoped<ILaunchesDbContext>(provider =>
                provider.GetService<LaunchesDbContext>());

            return services;
        }
    }
}
