using AutoMapper;
using SpaceXinfo.Application.Common.Mappings;
using SpaceXinfo.Domain;
using System;

namespace SpaceXinfo.Application.Launches.Queries.GetLaunchList
{
    public class LaunchLookupDto : IMapWith<Launch>
    {
        public Guid Id { get; set; }
        public int FavouriteLaunchId { get; set; }
        
        public void Mapping(Profile profile)
        {
            profile.CreateMap<Launch, LaunchLookupDto>()
                .ForMember(launchDto => launchDto.Id,
                    opt => opt.MapFrom(launch => launch.Id))
                .ForMember(launchDto => launchDto.FavouriteLaunchId,
                    opt => opt.MapFrom(launch => launch.FavouriteLaunchId));
        }
    }
}
