using AutoMapper;
using Shouldly;
using SpaceXinfo.Application.Launches.Queries.GetLaunchList;
using SpaceXinfo.Persistence;
using SpaceXinfo.Tests.Common;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace SpaceXinfo.Tests.Launches.Queries
{
    [Collection("QueryCollection")]
    public class GetLaunchListQueryHandlerTests : QueryTestFixture
    {
        private readonly LaunchesDbContext Context;
        private readonly IMapper Mapper;

        public GetLaunchListQueryHandlerTests(QueryTestFixture fixture)
        {
            Context = fixture.Context;
            Mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetLaunchListQueryHandler_Success()
        {
            //Arrange
            var handler = new GetLaunchListQueryHandler(Context, Mapper);

            //Act
            var result = await handler.Handle(
                new GetLaunchListQuery
                {
                    UserId = LaunchesContextFactory.UserBId
                }, CancellationToken.None);

            //Assert
            result.ShouldBeOfType<LaunchListVm>();
            result.Launches.Count.ShouldBe(1);
        }
    }
}
