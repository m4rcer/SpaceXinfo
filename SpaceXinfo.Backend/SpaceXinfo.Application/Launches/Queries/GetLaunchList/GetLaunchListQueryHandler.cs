using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SpaceXinfo.Application.Interfaces;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchList
{
    public class GetLaunchListQueryHandler :
        IRequestHandler<GetLaunchListQuery, LaunchListVm>
    {
        private readonly ILaunchesDbContext _dbContext;
        private readonly IMapper _mapper;

        public GetLaunchListQueryHandler(ILaunchesDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<LaunchListVm> Handle(GetLaunchListQuery request, CancellationToken cancellationToken)
        {
            var launchesList = await _dbContext.Launches
                .Where(launch => launch.UserId == request.UserId)
                .ProjectTo<LaunchLookupDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return new LaunchListVm { Launches = launchesList };
        }
    }
}
