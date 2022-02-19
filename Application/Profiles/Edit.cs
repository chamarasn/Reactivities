using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using FluentValidation;
using Persistence;
using AutoMapper;
using Application.Interfaces;

namespace Application.Profiles
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string DisplayName { get; set; }
            public string Bio { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.DisplayName).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IMapper mapper,IUserAccessor userAccessor)
            {
            _userAccessor = userAccessor;
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = _context.Users.SingleOrDefault(x=> x.UserName == _userAccessor.GetUsername());

                if (user == null) return null;

                user.Bio = request.Bio ?? user.Bio;
                user.DisplayName = request.DisplayName ?? user.DisplayName;

                var result = await _context.SaveChangesAsync() > 0 ;

                if (!result) return Result<Unit>.Failure("Failed to update Activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}