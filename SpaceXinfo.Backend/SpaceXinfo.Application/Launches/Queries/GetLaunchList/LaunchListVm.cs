using System.Collections.Generic;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchList
{
    public class LaunchListVm
    {
        public IList<LaunchLookupDto> Launches { get; set; }
    }
}
