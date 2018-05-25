using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebLibraryCore.BusinessLogic;
using WebLibraryCore.BusinessLogic.Services;
using WebLibraryCore.DataAccess;
using WebLibraryCore.DataAccess.Interfaces;
using WebLibraryCore.DataAccess.Repository;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore
{
  public class Startup
  {
    public IConfiguration Configuration { get; }
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      string conectionString = Configuration.GetConnectionString("DefaultConnection");
      services.AddDbContext<EFDbContext>(options => options.UseSqlServer(conectionString));

      services.AddScoped<BookService>();
      services.AddScoped<ArticleService>();
      services.AddScoped<MagazineService>();
      services.AddScoped<PublicationService>();

      services.AddAutoMapper();
      services.AddMvc();

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 &&
           !Path.HasExtension(context.Request.Path.Value) &&
           !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });
      app.UseMvcWithDefaultRoute();
      app.UseDefaultFiles();
      app.UseStaticFiles();
    }
  }
}
