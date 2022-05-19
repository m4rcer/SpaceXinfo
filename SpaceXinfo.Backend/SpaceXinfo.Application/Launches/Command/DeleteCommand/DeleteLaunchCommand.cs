using System;
using MediatR;

namespace SpaceXinfo.Application.Launches.Command.DeleteCommand
{
    public class DeleteLaunchCommand : IRequest
    {
        public Guid UserId { get; set; }
        public Guid Id { get; set; }
    }
}
