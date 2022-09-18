using Application.Proposal;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProposalController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetProposals([FromQuery] ProposalParam param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));

        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(ProposalDto proposalDto)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Proposal = proposalDto }));
        }
    }
}
