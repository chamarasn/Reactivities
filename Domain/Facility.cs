namespace Domain
{
    public class Facility
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Int16 BookingCountryId { get; set; }
        public Int16 CurrencyId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime MaturityDate { get; set; }
        public decimal Limit { get; set; }
        public Proposal Proposal { get; set; }
    }
}
