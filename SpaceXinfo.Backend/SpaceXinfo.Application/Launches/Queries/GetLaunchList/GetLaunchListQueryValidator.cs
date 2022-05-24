using System;
using FluentValidation;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchList
{
    public class GetLaunchListQueryValidator : AbstractValidator<GetLaunchDetailsQuery>
    {
        public GetLaunchListQueryValidator()
        {
            RuleFor(launch => launch.Id).NotEqual(Guid.Empty);
        }
    }
}
