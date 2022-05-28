using AutoMapper;
using Shouldly;
using SpaceXinfo.Application.Launches.Queries;
using SpaceXinfo.Application.Launches.Queries.GetLaunchDetails;
using SpaceXinfo.Persistence;
using SpaceXinfo.Tests.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace SpaceXinfo.Tests.Launches.Queries
{
    [Collection("QueryCollection")]
    public class GetLaunchDetailsQueryHandlerTests : QueryTestFixture
    {
        private readonly LaunchesDbContext Context;
        private readonly IMapper Mapper;

        public GetLaunchDetailsQueryHandlerTests(QueryTestFixture fixture)
        {
            Context = fixture.Context;
            Mapper = fixture.Mapper;
        }
        
        [Fact]
        public async Task GetLaunchDetailsQueryHandler_Success()
        {
            //Arrange
            var handler = new GetLaunchDetailsQueryHandler(Context, Mapper);

            //Act
            var result = await handler.Handle(
                new GetLaunchDetailsQuery
                {
                    UserId = LaunchesContextFactory.UserBId,
                    Id = Guid.Parse("E57DAE28-66BE-4070-BB00-A2D2E957C7D8")
                }, CancellationToken.None);

            //Assert
            result.ShouldBeOfType<LaunchDetailsVm>();
            result.FavouriteLaunchId.ShouldBe(2);
            result.NotificationTime.ShouldBe(DateTime.MaxValue);
        }
    }
}
