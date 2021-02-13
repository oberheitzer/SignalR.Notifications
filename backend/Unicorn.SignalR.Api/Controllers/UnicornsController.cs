using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Unicorn.SignalR.Api.Hubs;
using Unicorn.SignalR.Model;
using Unicorn.SignalR.Model.Entities;

namespace Unicorn.SignalR.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnicornsController
    {
        private readonly UnicornDbContext _context;
        private readonly IHubContext<UnicornHub> _hub;

        public UnicornsController(UnicornDbContext context, IHubContext<UnicornHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        [HttpPost]
        public async Task CreateUnicorn()
        {
            await _context.Unicorns.AddAsync(new UnicornEntity());
            await _context.SaveChangesAsync();
            await _hub.Clients.All.SendAsync("GetUnicorns", await _context.Unicorns.CountAsync());
        }

        [HttpGet]
        public async Task<int> GetUnicorns()
        {
            return await _context.Unicorns.CountAsync();
        }
    }
}
