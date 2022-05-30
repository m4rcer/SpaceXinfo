using AutoMapper;
using SpaceXinfo.Application.Common.Mappings;
using SpaceXinfo.Application.Interfaces;
using SpaceXinfo.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace SpaceXinfo.Tests.Common
{
    public class QueryTestFixture : IDisposable
    {
        public LaunchesDbContext Context;
        public IMapper Mapper;

        public QueryTestFixture()
        {
            Context = LaunchesContextFactory.Create();
            var configurationProvider = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AssemblyMappingProfile(
                    typeof(ILaunchesDbContext).Assembly));
            });
            Mapper = configurationProvider.CreateMapper();
        }

        public void Dispose()
        {
            LaunchesContextFactory.Destroy(Context);
        }
    }

    [CollectionDefinition("QueryCollection")]
    public class QueryCollection : ICollectionFixture<QueryTestFixture> { }
}
