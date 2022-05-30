using System;
using FluentValidation;
namespace SpaceXinfo.Application.Launches.Queries.GetLaunchDetails
{
    public class GetLaunchDetaillsQueryValidator : AbstractValidator<GetLaunchDetailsQuery>
    {
        public GetLaunchDetaillsQueryValidator()
        {
            RuleFor(launch => launch.Id).NotEqual(Guid.Empty);
            RuleFor(launch => launch.UserId).NotEqual(Guid.Empty);
        }
    }
}
