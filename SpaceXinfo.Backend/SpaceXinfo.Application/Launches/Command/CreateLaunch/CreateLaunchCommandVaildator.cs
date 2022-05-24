using System;
using FluentValidation;

namespace SpaceXinfo.Application.Launches.Command.CreateLaunch
{
    public class CreateLaunchCommandVaildator : AbstractValidator<CreateLaunchCommand>
    {
        public CreateLaunchCommandVaildator()
        {
            RuleFor(createLaunchCommand =>
                createLaunchCommand.FavouriteLaunchId).NotEmpty();
            RuleFor(createLaunchCommand =>
                createLaunchCommand.UserId).NotEqual(Guid.Empty);
        }
    }
}
