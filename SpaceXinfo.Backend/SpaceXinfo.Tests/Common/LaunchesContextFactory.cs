using Microsoft.EntityFrameworkCore;
using SpaceXinfo.Domain;
using SpaceXinfo.Persistence;
using System;

namespace SpaceXinfo.Tests.Common
{
    public static class LaunchesContextFactory
    {
        public static Guid UserAId = Guid.NewGuid();
        public static Guid UserBId = Guid.NewGuid();

        public static Guid LaunchIdForDelete = Guid.NewGuid();

        public static LaunchesDbContext Create()
        {
            var options = new DbContextOptionsBuilder<LaunchesDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;
            var context = new LaunchesDbContext(options);
            context.Database.EnsureCreated();
            context.Launches.AddRange(
                new Launch
                {
                    FavouriteLaunchId = 1,
                    Id = Guid.Parse("A4559A62-2204-4123-BFA0-22EEFA865098"),
                    UserId = UserAId,
                    NotificationTime = DateTime.Today
                },
                new Launch
                {
                    FavouriteLaunchId = 2,
                    Id = Guid.Parse("E57DAE28-66BE-4070-BB00-A2D2E957C7D8"),
                    UserId = UserBId,
                    NotificationTime = DateTime.MaxValue
                },
                new Launch
                {
                    FavouriteLaunchId = 3,
                    Id = LaunchIdForDelete,
                    UserId = UserAId,
                    NotificationTime = DateTime.Today
                }
            );

            context.SaveChanges();
            return context;
        }

        public static void Destroy(LaunchesDbContext context)
        {
            context.Database.EnsureDeleted();
            context.Dispose();
        }
    }
}
