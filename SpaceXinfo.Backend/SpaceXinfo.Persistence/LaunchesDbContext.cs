using Microsoft.EntityFrameworkCore;
using SpaceXinfo.Application.Interfaces;
using SpaceXinfo.Domain;
using SpaceXinfo.Persistence.EntityTypeConfigurations;

namespace SpaceXinfo.Persistence
{
    public class LaunchesDbContext : DbContext, ILaunchesDbContext
    {
        public DbSet<Launch> Launches { get; set; }

        public LaunchesDbContext(DbContextOptions<LaunchesDbContext> options) : 
            base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new LaunchConfiguration());
            base.OnModelCreating(builder);
        }
    }
}
