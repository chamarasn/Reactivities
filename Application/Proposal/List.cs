

using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Persistence;

namespace Application.Proposal
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<ProposalDto>>>
        {
            public ProposalParam Params { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<ProposalDto>>>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<PagedList<ProposalDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.Proposals
                             .ProjectTo<ProposalDto>(_mapper.ConfigurationProvider)
                            .AsQueryable();

                return Result<PagedList<ProposalDto>>.Success(
                    await PagedList<ProposalDto>.CreateAsync(query, request.Params.PageNumber,
                    request.Params.PageSize)
                );
            }
        }
    }
}
