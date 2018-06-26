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
  [Route("api/Book")]
  public class BookController : Controller
  {
    private readonly BookService bookService;

    public BookController(BookService bookService)
    {
      this.bookService = bookService;
    }

    // GET: api/Book
    [HttpGet]
    public IEnumerable<GetBookView> GetAll()
    {
      return bookService.GetAllBooksWithGenres();
    }

    // GET: api/Book/5
    [HttpGet ("{id}")]
    public async Task<GetBookView> Get(int id)
    {
      //if (id == 0)
      //{
      //  throw new NotImplementedException();
      //}
      return await bookService.GetBookDetails(id);
    }

    // POST: api/Book
    [HttpPost]
    public IActionResult Post(GetBookView book)
    {
      bookService.Create(book);

      return Ok(book);
    }

    // PUT: api/Book/5
    [HttpPut]
    public IActionResult Put(int id, [FromBody]GetBookView book)
    {
      bookService.Update(book);

      return Ok(book);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete]
    public IActionResult Delete([FromBody]string id)
    {
      Int32.TryParse(id, out int request);
      bookService.Delete(request);
      return Ok(id);
    }
  }
}
