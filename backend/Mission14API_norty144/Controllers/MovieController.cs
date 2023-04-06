using Microsoft.AspNetCore.Mvc;
using Mission14API_norty144.Data;

namespace Mission14API_norty144.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }


        public IEnumerable<Movies> Get()
        {
            return (context.Movies.ToArray()
            .Where(x => x.Edited == "Yes")
            .OrderBy(x => x.Title));
        }
    }
}


