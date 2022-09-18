
namespace Application.Proposal
{
    public class ProposalDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public Int16 StatusId { get; set; }
        public CustomerGroupDto CustomerGroup { get; set; }
        public ICollection<FacilityDto> Facilities { get; set; }

    }
}
