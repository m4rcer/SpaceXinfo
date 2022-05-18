using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaceXinfo.Domain;

namespace SpaceXinfo.Persistence.EntityTypeConfigurations
{
    public class LaunchConfiguration : IEntityTypeConfiguration<Launch>
    {
        public void Configure(EntityTypeBuilder<Launch> builder)
        {
            builder.HasKey(launch => launch.Id);
            builder.HasIndex(launch => launch.Id).IsUnique();
        }
    }
}
