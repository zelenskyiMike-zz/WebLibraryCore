using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess
{
    public class EFDbContext : DbContext
    {
        public EFDbContext() : base()
        {
            Database.EnsureCreated();
        }

        public DbSet<Article> Articles { get; set; }
        //public DbSet<ArticleGenre> ArticleGenres { get; set; }
        //public DbSet<ArticleAuthor> ArticleAuthors { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=helloappdb;Trusted_Connection=True;");
        }
    }
}
