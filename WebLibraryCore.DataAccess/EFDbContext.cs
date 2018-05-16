using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess
{
    public class EFDbContext : DbContext
    {
        public EFDbContext(DbContextOptions<EFDbContext> options): base(options)
        {  }

        public DbSet<Article> Articles { get; set; }
        public DbSet<ArticleGenre> ArticleGenres { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<BookGenre> BookGenres { get; set; }
        public DbSet<Publication> Publications { get; set; }
        public DbSet<PublicationGenre> PublicationGenres { get; set; }
        public DbSet<Magazine> Magazines { get; set; }
        public DbSet<MagazineGenre> MagazineGenres { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-4MO8MBQ;Database=LibraryDBCore;Trusted_Connection=True;");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ArticleAuthor>().HasKey(x => new {x.ArticleID, x.AuthorID });
            builder.Entity<BookAuthor>().HasKey(x => new { x.BookID, x.AuthorID });
            builder.Entity<PublicationAuthor>().HasKey(x => new { x.PublicationID, x.AuthorID });
            builder.Entity<MagazineAuthor>().HasKey(x => new { x.MagazineID, x.AuthorID });
        }
    }
}
