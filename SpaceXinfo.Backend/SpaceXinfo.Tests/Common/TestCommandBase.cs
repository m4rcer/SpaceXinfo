using SpaceXinfo.Persistence;
using System;

namespace SpaceXinfo.Tests.Common
{
    public class TestCommandBase : IDisposable
    {
        protected readonly LaunchesDbContext Context;

        public TestCommandBase() => 
            Context = LaunchesContextFactory.Create();

        public void Dispose()
        {
            LaunchesContextFactory.Destroy(Context);
        }
    }
}
