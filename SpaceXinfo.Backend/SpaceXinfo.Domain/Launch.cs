﻿using System;

namespace SpaceXinfo.Domain
{
    public class Launch
    {
        public Guid UserId { get; set; }
        public Guid Id { get; set; }
        public int FavouriteLaunchId { get; set; }
        public DateTime NotificationTime { get; set; }
    }
}
