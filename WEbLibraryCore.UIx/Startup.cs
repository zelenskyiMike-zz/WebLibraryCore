using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebLibraryCore.BusinessLogic;
using WebLibraryCore.BusinessLogic.Services;
using WebLibraryCore.DataAccess;

namespace WEbLibraryCore.UIx
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      string conectionString = Configuration.GetConnectionString("DefaultConnection");
      services.AddDbContext<EFDbContext>(options => options.UseSqlServer(conectionString));

      services.AddTransient<BookService>();
      services.AddTransient<ArticleService>();
      services.AddTransient<MagazineService>();
      services.AddTransient<PublicationService>();
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      //if (env.IsDevelopment())
      //{
      //  app.UseBrowserLink();
      //  app.UseDeveloperExceptionPage();
      //}
      //else
      //{
      //  app.UseExceptionHandler("/Home/Error");
      //}

      //app.UseStaticFiles();

      //app.UseMvc(routes =>
      //{
      //  routes.MapRoute(
      //            name: "default",
      //            template: "{controller=Home}/{action=Index}/{id?}");
      //});
      MappingInitailizer.InitializeAutoMapper();
      app.UseMvcWithDefaultRoute();
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseCors(builder => {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
      });
    }
  }
}
