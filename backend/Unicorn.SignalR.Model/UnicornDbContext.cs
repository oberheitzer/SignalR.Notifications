using Microsoft.EntityFrameworkCore;
using Unicorn.SignalR.Model.Entities;

namespace Unicorn.SignalR.Model
{
    public class UnicornDbContext : DbContext
    {
        public DbSet<UnicornEntity> Unicorns { get; set; }

        public UnicornDbContext(DbContextOptions<UnicornDbContext> options) : base(options) { }
    }
}
