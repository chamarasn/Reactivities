namespace Application.Proposal
{
    public class FacilityDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Int16 BookingCountryId { get; set; }
        public string BookingCountry { get; set; }
        public Int16 CurrencyId { get; set; }
        public string Currency { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime MaturityDate { get; set; }
        public decimal Limit { get; set; }
        public ProposalDto Proposal { get; set; }
    }
}
