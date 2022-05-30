using AutoMapper;
using SpaceXinfo.Application.Common.Mappings;
using SpaceXinfo.Application.Launches.Command.CreateLaunch;
using System;
using System.ComponentModel.DataAnnotations;

namespace SpaceXinfo.WebApi.Models
{
    public class CreateLaunchDto : IMapWith<CreateLaunchCommand>
    {
        [Required]
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
