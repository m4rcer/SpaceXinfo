using Microsoft.EntityFrameworkCore;
using SpaceXinfo.Domain;
using System.Threading;
using System.Threading.Tasks;

namespace SpaceXinfo.Application.Interfaces
{
    public interface ILaunchesDbContext
    {
        DbSet<Launch> Launches { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
