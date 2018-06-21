using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebLibraryCore.WebUI.Controllers
{
  [Produces("application/json")]
  [Route("api/Test")]
  public class TestController : Controller
  {
    // GET api/values  
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "ok", "ok", "ok", "ok" };
    }

    [HttpGet("{id}")]
    public IEnumerable<string> Get(int n)
    {
      if (n==1)
      {
        return new string[] { "Laptop", "SmartTV", "SmartPhone", "Tablet" };
      }
      if (n==0)
      {
        return new string[] { "Lap top", "Smart TV", "Smart Phone", "Tab let" };
      }
      return new string[] { "no ok" };
    }
  }
}
