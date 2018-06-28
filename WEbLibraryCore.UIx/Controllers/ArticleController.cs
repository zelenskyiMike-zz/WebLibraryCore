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
  [Route("api/Article")]
  public class ArticleController : Controller
  {
    private readonly ArticleService articleService;

    public ArticleController(ArticleService articleService)
    {
      this.articleService = articleService;
    }

    // GET: api/Article
    [HttpGet]
    public IEnumerable<GetArticleView> GetAll()
    {
      return articleService.GetAllArticlesWithGenres();
    }

    // GET: api/Article/5
    [HttpGet("{id}")]
    public async Task<GetArticleView> Get(int id)
    {
      return await articleService.GetArticleDetails(id);
    }

    // POST: api/Article
    [HttpPost]
    public IActionResult Post(GetArticleView article)
    {
      articleService.Create(article);

      return Ok(article);
    }

    // PUT: api/Article/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]GetArticleView article)
    {
      articleService.Update(article);

      return Ok(article);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      articleService.Delete(id);

      return Ok(id);
    }
  }
}
