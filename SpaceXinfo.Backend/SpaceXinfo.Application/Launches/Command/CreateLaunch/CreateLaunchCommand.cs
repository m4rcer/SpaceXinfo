using System;
using MediatR;

namespace SpaceXinfo.Application.Launches.Command.CreateLaunch
{
    public class CreateLaunchCommand : IRequest<Guid>
    {
        public Guid UserId { get; set; }
        public int FavouriteLaunchId { get; set; }
        public DateTime NotificationTime { get; set; }
    }
}
