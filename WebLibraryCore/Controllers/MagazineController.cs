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
  [Route("api/Magazine")]
  public class MagazineController : Controller
  {
    private readonly MagazineService magazineService;

    public MagazineController(MagazineService magazineService)
    {
      this.magazineService = magazineService;
    }

    // GET: api/Magazine
    [HttpGet]
    public IEnumerable<GetMagazineView> GetAll()
    {
      return magazineService.GetAllMagazinesWithGenres();
    }

    // GET: api/Magazine/5
    [HttpGet("{id}")]
    public async Task<GetMagazineView> Get(int id)
    {
      return await magazineService.GetMagazineDetails(id);
    }

    // POST: api/Magazine
    [HttpPost]
    public IActionResult Post(GetMagazineView magazine)
    {
      magazineService.Create(magazine);
      return Ok(magazine);
    }

    // PUT: api/Magazine/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, GetMagazineView magazine)
    {
      magazineService.Update(magazine);
      return Ok(magazine);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      magazineService.Delete(id);

      return Ok(id);
    }
  }
}
