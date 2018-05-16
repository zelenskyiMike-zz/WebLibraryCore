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
        public BookRepository(EFDbContext context) : base(context){}

        public IEnumerable<Author> GetAllBooksWithGenres()
        {
            var initBookAuthorList = context.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();

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

        public IEnumerable<Author> GetAuthorsNotExistInBook(Book book)
        {
            throw new NotImplementedException();
        }

        public Task<Book> GetBookDetails(int id)
        {
            throw new NotImplementedException();
        }
    }
}
