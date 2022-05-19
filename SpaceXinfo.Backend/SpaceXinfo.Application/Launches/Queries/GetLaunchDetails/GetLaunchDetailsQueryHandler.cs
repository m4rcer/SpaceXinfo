using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SpaceXinfo.Application.Common.Exceptions;
using SpaceXinfo.Application.Interfaces;
using SpaceXinfo.Domain;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchDetails
{
    public class GetLaunchDetailsQueryHandler :
        IRequestHandler<GetLaunchDetailsQuery, LaunchDetailsVm>
    {

        private readonly ILaunchesDbContext _dbContext;
        private readonly IMapper _mapper;

        public GetLaunchDetailsQueryHandler(ILaunchesDbContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<LaunchDetailsVm> Handle(GetLaunchDetailsQuery request, CancellationToken cancellationToken)
        {
            var entity = await _dbContext.Launches
                .FirstOrDefaultAsync(launch =>
                    launch.Id == request.Id, cancellationToken);
            if (entity == null || entity.UserId != request.UserId)
            {
                throw new NotFoundException(nameof(Launch), request.Id);
            }

            return _mapper.Map<LaunchDetailsVm>(entity);
        }
    }
}
