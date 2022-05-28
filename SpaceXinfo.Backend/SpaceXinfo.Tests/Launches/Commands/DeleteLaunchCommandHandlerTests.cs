using SpaceXinfo.Tests.Common;
using Xunit;
using System;
using System.Linq;
using SpaceXinfo.Application.Common.Exceptions;
using SpaceXinfo.Application.Launches.Command.DeleteCommand;
using System.Threading.Tasks;
using System.Threading;
using SpaceXinfo.Application.Launches.Command.CreateLaunch;

namespace SpaceXinfo.Tests.Launches.Commands
{
    public class DeleteLaunchCommandHandlerTests : TestCommandBase
    {
        [Fact]
        public async Task DeleteLaunchCommandHandler_Success()
        {
            //Arrange
            var handler = new DeleteLaunchCommandHandler(Context);

            //Act
            await handler.Handle(
                new DeleteLaunchCommand
                {
                    Id = LaunchesContextFactory.LaunchIdForDelete,
                    UserId = LaunchesContextFactory.UserAId
                }, CancellationToken.None);
            //Assert
            Assert.Null(Context.Launches.SingleOrDefault(launch =>
                launch.Id == LaunchesContextFactory.LaunchIdForDelete));
        }

        [Fact]
        public async Task DeleteLaunchCommandHandler_FailOnWrongId()
        {
            //Arrange
            var handler = new DeleteLaunchCommandHandler(Context);

            //Act
            //Assert
            await Assert.ThrowsAsync<NotFoundException>(async () =>
                await handler.Handle(
                        new DeleteLaunchCommand
                        {
                            Id = Guid.NewGuid(),
                            UserId = LaunchesContextFactory.UserAId
                        },
                        CancellationToken.None));
        }

        [Fact]
        public async Task DeleteLaunchCommandHandler_FailOnWrongUserId()
        {
            //Arrange
            var deleteHandler = new DeleteLaunchCommandHandler(Context);
            var createHandler = new CreateLaunchCommandHandler(Context);
            var launchId = createHandler.Handle(
                new CreateLaunchCommand
                {
                    FavouriteLaunchId = 8,
                    NotificationTime = DateTime.Today,
                    UserId = LaunchesContextFactory.UserAId
                }, CancellationToken.None);
            //Act
            //Assert
            await Assert.ThrowsAsync<NotFoundException>(async () =>
                await deleteHandler.Handle(
                        new DeleteLaunchCommand
                        {
                            Id = Guid.NewGuid(),
                            UserId = LaunchesContextFactory.UserBId
                        },
                        CancellationToken.None));
        }
    }
}
