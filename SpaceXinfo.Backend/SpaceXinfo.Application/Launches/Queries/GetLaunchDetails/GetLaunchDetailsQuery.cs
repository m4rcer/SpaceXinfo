using System;
using MediatR;
using SpaceXinfo.Application.Launches.Queries.GetLaunchDetails;

namespace SpaceXinfo.Application.Launches.Queries
{
    public class GetLaunchDetailsQuery : IRequest<LaunchDetailsVm>
    {
        public Guid UserId { get; set; }
        public Guid Id { get; set; }

    }
}
