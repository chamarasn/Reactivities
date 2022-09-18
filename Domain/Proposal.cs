
namespace Domain
{
    public class Proposal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; } 
        public Int16 StatusId { get; set; }
        public CustomerGroup CustomerGroup { get; set; }
        public int CustomerGroupId { get; set; }
        public ICollection<Facility> Facilitys { get; set; } = new List<Facility>();

    }
}
