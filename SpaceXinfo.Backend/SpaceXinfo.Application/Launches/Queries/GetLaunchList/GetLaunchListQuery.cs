using System;
using MediatR;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchList
{
    public class GetLaunchListQuery : IRequest<LaunchListVm>
    {
        public Guid UserId { get; set; }

    }
}
