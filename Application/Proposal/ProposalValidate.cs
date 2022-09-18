using FluentValidation;

namespace Application.Proposal
{
    public class ProposalValidate : AbstractValidator<ProposalDto>
    {
        public ProposalValidate()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();
           // RuleFor(x => x.).NotEmpty();


        }
    }
}
