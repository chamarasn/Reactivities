using Application.Core;
using AutoMapper;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Proposal
{
    public class Create
    {
        public class Command : IRequest<Result<ProposalDto>>
        {
            public ProposalDto Proposal { get; set; }
        }

        public class CommandValidation : AbstractValidator<Command>
        {
            public CommandValidation()
            {
                RuleFor(x => x.Proposal).SetValidator(new ProposalValidate());
            }
        }

        public class Handler : IRequestHandler<Command, Result<ProposalDto>>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Result<ProposalDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                var a = context.Activities.ToArray();

                var proposal = mapper.Map<ProposalDto, Domain.Proposal>(request.Proposal);

                context.Proposals.Add(proposal);

                var result = await context.SaveChangesAsync() > 0;

                if (!result) return Result<ProposalDto>.Failure("Failed to create Activity");

                var proposalDto = mapper.Map<Domain.Proposal, ProposalDto>(proposal);

                return Result<ProposalDto>.Success(proposalDto);
            }
        }
    }
}
