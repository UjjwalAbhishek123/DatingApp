
namespace API.Entities
{
    public class AppUser
    {
        //it will be the columns in table created by DbSet
        public int Id {get; set;}
        public string UserName { get; set; }
    }
}