using System.Threading;
using System.Threading.Tasks;
using MediatR;
using SpaceXinfo.Application.Common.Exceptions;
using SpaceXinfo.Application.Interfaces;
using SpaceXinfo.Domain;

namespace SpaceXinfo.Application.Launches.Command.DeleteCommand
{
    public class DeleteLaunchCommandHandler : 
        IRequestHandler<DeleteLaunchCommand>
    {
        private readonly ILaunchesDbContext _dbContext;

        public DeleteLaunchCommandHandler(ILaunchesDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Unit> Handle(DeleteLaunchCommand request, 
            CancellationToken cancellationToken)
        {
            var entity = await _dbContext.Launches
                .FindAsync(new object[] { request.Id }, cancellationToken);

            if (entity == null || entity.UserId != request.UserId)
            {
                throw new NotFoundException(nameof(Launch), request.Id);
            }

            _dbContext.Launches.Remove(entity);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
