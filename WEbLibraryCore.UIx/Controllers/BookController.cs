using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebLibraryCore.BusinessLogic.Services;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.WebUI.Controllers
{
  //[Produces("application/json")]
  [Route("api/Book")]
  public class BookController : Controller
  {
    private readonly BookService _bookService;

    public BookController(BookService bookService)
    {
      _bookService = bookService;
    }

    // GET: api/Book
    [HttpGet]
    [Route("getAll")]
    public /*IEnumerable<GetBookView>*/IActionResult GetAll()
    {
      var result = _bookService.GetAllBooksWithGenres();
      return Ok(result);
    }

    // GET: api/Book/5
    [HttpGet]
    [Route("get/{id}")]
    public async Task<GetBookView> Get(int id)
    {
      //if (id == 0)
      //{
      //  throw new NotImplementedException();
      //}
      return await _bookService.GetBookDetails(id);
    }

    // POST: api/Book
    [HttpPost]
    public IActionResult Post([FromBody]GetBookView book)
    {
      _bookService.Create(book);

      return Ok(book);
    }

    // PUT: api/Book/5
    [HttpPut]
    public IActionResult Put(int id, [FromBody]GetBookView book)
    {
      _bookService.Update(book);

      return Ok(book);
    }

    // DELETE: api/ApiWithActions/5
    [HttpGet]
    [Route("delete/{id}")]
    public IActionResult Delete(int id)
    {
      //Int32.TryParse(id, out int request);
      _bookService.Delete(id);
      return NoContent();
    }
  }
}
