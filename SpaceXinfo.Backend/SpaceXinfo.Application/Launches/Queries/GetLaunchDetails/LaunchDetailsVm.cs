using AutoMapper;
using SpaceXinfo.Application.Common.Mappings;
using SpaceXinfo.Domain;
using System;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchDetails
{
    public class LaunchDetailsVm : IMapWith<Launch>
    {
        public Guid Id { get; set; }
        public int FavouriteLaunchId { get; set; }
        public DateTime NotificationTime { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Launch, LaunchDetailsVm>()
                .ForMember(launchVm => launchVm.FavouriteLaunchId,
                    opt => opt.MapFrom(launch => launch.FavouriteLaunchId))
                .ForMember(launchVm => launchVm.NotificationTime,
                    opt => opt.MapFrom(launch => launch.NotificationTime));
        }
    }
}
