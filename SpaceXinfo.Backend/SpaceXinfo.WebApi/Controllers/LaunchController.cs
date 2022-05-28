using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SpaceXinfo.Application.Launches.Command.CreateLaunch;
using SpaceXinfo.Application.Launches.Command.DeleteCommand;
using SpaceXinfo.Application.Launches.Queries;
using SpaceXinfo.Application.Launches.Queries.GetLaunchList;
using SpaceXinfo.WebApi.Models;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using SpaceXinfo.Application.Launches.Queries.GetLaunchDetails;

namespace SpaceXinfo.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class LaunchController : BaseController
    {
        private readonly IMapper _mapper;

        public LaunchController(IMapper mapper) => _mapper = mapper;

        /// <summary>
        /// Gets the list of launches
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// Get /launch
        /// </remarks>
        /// <returns>Returns LaunchListVm</returns>
        /// <response code="200">Success</response>
        /// <response code="401">If the user is unauthorized</response>
        [HttpGet]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult<LaunchListVm>> GetAll()
        {
            var query = new GetLaunchListQuery
            {
                UserId = UserId
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }

        /// <summary>
        /// Gets the launch by id
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// Get /launch/16B73435-AB06-4A5B-974C-33DBF5448DB0
        /// </remarks>
        /// <param name="id">Launch id (guid)</param>
        /// <returns>Returns LaunchDetailsVm</returns>
        /// <response code="200">Success</response>
        /// <response code="401">If the user is unauthorized</response>
        [HttpGet("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult<LaunchDetailsVm>> Get(Guid id)
        {
            var query = new GetLaunchDetailsQuery
            {
                UserId = UserId,
                Id = id
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }

        /// <summary>
        /// Creates the launch
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// Post /launch
        /// {
        ///     FavouriteLaunchId = 2,
        ///     NotificationTime = 2022-05-29T10:00:00
        /// }
        /// </remarks>
        /// <param name="createLaunchDto">CreateLaunchDto object</param>
        /// <returns>Returns id (guid)</returns>
        /// <response code="201">Success</response>
        /// <response code="401">If the user is unauthorized</response>
        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult<Guid>> Create([FromBody] CreateLaunchDto createLaunchDto)
        {
            var command = _mapper.Map<CreateLaunchCommand>(createLaunchDto);
            command.UserId = UserId;
            var launchId = await Mediator.Send(command);
            return Ok(launchId);
        }

        /// <summary>
        /// Deletes the launch
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// Delete /launch/16B73435-AB06-4A5B-974C-33DBF5448DB0
        /// </remarks>
        /// <param name="id">Id of launch (guid)</param>
        /// <returns>Returns NoContent</returns>
        /// <response code="204">Success</response>
        /// <response code="401">If the user is unauthorized</response>
        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)] 
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
