using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace SpaceXinfo.Identity.Data
{
    public class AuthDbContext : IdentityDbContext<IdentityUser>
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) :
            base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityUser>(entity => 
                entity.ToTable(name: "Users"));
            builder.Entity<IdentityRole>(entity => 
                entity.ToTable(name: "Roles"));
            builder.Entity<IdentityUserRole<string>>(entity =>
                entity.ToTable(name: "UserRoles"));
            builder.Entity<IdentityUserClaim<string>>(entity =>
                entity.ToTable(name: "UserClaim"));
            builder.Entity<IdentityUserLogin<string>>(entity =>
                entity.ToTable(name: "UserLogins"));
            builder.Entity<IdentityUserToken<string>>(entity =>
                entity.ToTable(name: "UserTokens"));
            builder.Entity<IdentityRoleClaim<string>>(entity =>
                entity.ToTable(name: "RoleClaims"));

            builder.ApplyConfiguration(new IdentityUserConfiguration());
        }
    }
}
