using SpaceXinfo.Tests.Common;
using Xunit;
using System.Threading;
using System.Threading.Tasks;
using SpaceXinfo.Application.Launches.Command.CreateLaunch;
using System;
using Microsoft.EntityFrameworkCore;

namespace SpaceXinfo.Tests.Launches.Commands
{
    public class CreateLaunchCommandHandlerTests : TestCommandBase
    {
        [Fact]
        public async Task CreateLaunchCommandHandler_Success() 
        {
            //Arrange
            var handler = new CreateLaunchCommandHandler(Context);
            var favouriteLaunchId = 7;
            var notificationTime = DateTime.Today;

            //Act
            var launchId = await handler.Handle(
                new CreateLaunchCommand
                {
                    FavouriteLaunchId = favouriteLaunchId,
                    NotificationTime = notificationTime,
                    UserId = LaunchesContextFactory.UserAId
                }, CancellationToken.None);

            //Assert
            Assert.NotNull(
                await Context.Launches.SingleOrDefaultAsync(launch =>
                launch.Id == launchId && launch.FavouriteLaunchId == favouriteLaunchId &&
                launch.NotificationTime == notificationTime));
        }
    }
}
