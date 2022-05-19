using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using SpaceXinfo.Application.Interfaces;
using SpaceXinfo.Domain;

namespace SpaceXinfo.Application.Launches.Command.CreateLaunch
{
    public class CreateLaunchCommandHandler : 
        IRequestHandler<CreateLaunchCommand, Guid>
    {
        private readonly ILaunchesDbContext _dbContext;

        public CreateLaunchCommandHandler(ILaunchesDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Guid> Handle(CreateLaunchCommand request, 
            CancellationToken cancellationToken)
        {
            var launch = new Launch
            {
                UserId = request.UserId,
                Id = Guid.NewGuid(),
                FavouriteLaunchId = request.FavouriteLaunchId,
                NotificationTime = request.NotificationTime
            };

            await _dbContext.Launches.AddAsync(launch, cancellationToken);
            await _dbContext.SaveChangesAsync(cancellationToken);   
            return launch.Id;
        }
    }
}
