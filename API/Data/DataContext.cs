
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext :DbContext
    {
        //for passing connection string as an option
        public DataContext(DbContextOptions options): base(options)
        {
            
        }

        //adding DbSet to our class, it will create table
        public DbSet<AppUser> Users { get; set; }
    }
}