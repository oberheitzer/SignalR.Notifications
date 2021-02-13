using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Unicorn.SignalR.Model;

namespace Unicorn.SignalR.Api.Hubs
{
    public class UnicornHub : Hub
    {
        private readonly UnicornDbContext _context;

        public UnicornHub(UnicornDbContext context)
        {
            _context = context;
        }

        public async Task SendNotification()
        {
            await Clients.All.SendAsync("GetUnicorns", await _context.Unicorns.CountAsync());
        }
    }
}
