using Microsoft.EntityFrameworkCore;

namespace Mission14API_norty144.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }
    }
}
