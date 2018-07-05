using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.DataAccess.Interfaces;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Repository
{
    public class BookRepository : GenericRepository<Book>, IBookRepository
    {
        private readonly EFDbContext context;

        public BookRepository(EFDbContext context) : base(context){
            this.context = context;
        }

        public IEnumerable<Book> GetAllBooksWithGenres()
        {
            return context.Books/*.Include(g => g.BookGenres)*/;
        }

        public IEnumerable<Author> GetAuthorsNotExistInBook(Book book)
        {
            var initBookAuthorList = book.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();
                //context.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();

            List<Author> finalListOfAuthors = new List<Author>();

            foreach (var item in context.Authors.ToList())
            {
                if (!initBookAuthorList.Contains(item))
                {
                    finalListOfAuthors.Add(item);
                }
            }
            return finalListOfAuthors;
        }

        public async Task<Book> GetBookDetails(int id)
        {
            var book = /*await GetByID(id)*/ id;
            //BookGenre genre = context.BookGenres.Where(x => x.GenreID == book.GenreID).SingleOrDefault();

//            var authorList = book.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();

            Book bookVM = new Book()
            {
                //BookID = book.BookID,
                //BookName = book.BookName,
                //GenreID = book.GenreID,
                //YearOfPublish = book.YearOfPublish,
                //BookGenres = genre
                ////AuthorsIDs = authorList
            };
            return bookVM;
        }
    }
}
