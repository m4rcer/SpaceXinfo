using System;
using FluentValidation;

namespace SpaceXinfo.Application.Launches.Command.DeleteCommand
{
    public class DeleteLaunchCommandValidator : AbstractValidator<DeleteLaunchCommand>
    {
        public DeleteLaunchCommandValidator()
        {
            RuleFor(deleteLaunchCommand => deleteLaunchCommand.Id).NotEqual(Guid.Empty);
            RuleFor(deleteLaunchCommand => deleteLaunchCommand.UserId).NotEqual(Guid.Empty);
        }
    }
}
