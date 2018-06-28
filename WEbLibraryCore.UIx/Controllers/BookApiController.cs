using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebLibraryCore.BusinessLogic.Services;
using WebLibraryCore.ViewModels.ViewModels;

namespace WEbLibraryCore.UIx.Controllers
{
  [Route("api/BookApi")]
  public class BookApiController : Controller
  {
    private readonly BookService _bookService;

    public BookApiController(BookService bookService)
    {
      _bookService = bookService;
    }
    // GET: api/BookApi
    [HttpGet]
    [Route("get")]
    public IActionResult/*<string/*GetBookView*/ Get()
    {
      var result = _bookService.GetAllBooksWithGenres();
      return Ok(result);
      //return bookService.GetAllBooksWithGenres();

    }

    // GET: api/BookApi/5
    [HttpGet("{id}", Name = "Get")]
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/BookApi
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/BookApi/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
