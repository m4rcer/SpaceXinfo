using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SpaceXinfo.Application.Launches.Command.CreateLaunch;
using SpaceXinfo.Application.Launches.Command.DeleteCommand;
using SpaceXinfo.Application.Launches.Queries;
using SpaceXinfo.Application.Launches.Queries.GetLaunchList;
using SpaceXinfo.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaceXinfo.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class LaunchController : BaseController
    {
        private readonly IMapper _mapper;

        public LaunchController(IMapper mapper) => _mapper = mapper;

        [HttpGet]
        public async Task<ActionResult<LaunchListVm>> GetAll()
        {
            var query = new GetLaunchListQuery
            {
                UserId = UserId
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LaunchListVm>> Get(Guid id)
        {
            var query = new GetLaunchDetailsQuery
            {
                UserId = UserId,
                Id = id
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> Create([FromBody] CreateLaunchDto createLaunchDto)
        {
            var command = _mapper.Map<CreateLaunchCommand>(createLaunchDto);
            command.UserId = UserId;
            var launchId = await Mediator.Send(command);
            return Ok(launchId);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteLaunchCommand
            {
                Id = id,
                UserId = UserId
            };
            await Mediator.Send(command);
            return NoContent();
        }
    }
}
