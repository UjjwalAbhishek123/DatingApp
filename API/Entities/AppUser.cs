
namespace API.Entities
{
    public class AppUser
    {
        //it will be the columns in table created by DbSet
        public int Id {get; set;}

        public string UserName { get; set; }

        //adding properties to store password information
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}