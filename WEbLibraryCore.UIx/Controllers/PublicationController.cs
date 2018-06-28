using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebLibraryCore.BusinessLogic.Services;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.WebUI.Controllers
{
  [Produces("application/json")]
  [Route("api/Publication")]
  public class PublicationController : Controller
  {
    private readonly PublicationService publicationService;

    public PublicationController(PublicationService publicationService)
    {
      this.publicationService = publicationService;
    }

    // GET: api/Publication
    [HttpGet]
    public IEnumerable<GetPublicationView> GetAll()
    {
      return publicationService.GetAllPublicationsWithGenres();
    }

    // GET: api/Publication/5
    [HttpGet("{id}")]
    public async Task<GetPublicationView> Get(int id)
    {
      return await publicationService.GetPublicationDetails(id);
    }

    // POST: api/Publication
    [HttpPost]
    public IActionResult Post(GetPublicationView publication)
    {
      publicationService.Create(publication);

      return Ok(publication);
    }

    // PUT: api/Publication/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, GetPublicationView publication)
    {
      publicationService.Update(publication);

      return Ok(publication);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      publicationService.Delete(id);

      return Ok(id);
    }
  }
}
