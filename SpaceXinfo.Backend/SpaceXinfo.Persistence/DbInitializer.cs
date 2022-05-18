namespace SpaceXinfo.Persistence
{
    public class DbInitializer
    {
        public static void Initialize(LaunchesDbContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
