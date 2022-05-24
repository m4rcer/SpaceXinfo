using AutoMapper;
using SpaceXinfo.Application.Common.Mappings;
using SpaceXinfo.Application.Launches.Command.CreateLaunch;
using System;

namespace SpaceXinfo.WebApi.Models
{
    public class CreateLaunchDto : IMapWith<CreateLaunchCommand>
    {
        public int FavouriteLaunchId { get; set; }
        public DateTime NotificationTime { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<CreateLaunchDto, CreateLaunchCommand>()
                .ForMember(launchCommand => launchCommand.FavouriteLaunchId,
                    opt => opt.MapFrom(launchDto => launchDto.FavouriteLaunchId))
                .ForMember(launchCommand => launchCommand.NotificationTime,
                    opt => opt.MapFrom(launchDto => launchDto.NotificationTime));
        }
    }
}
