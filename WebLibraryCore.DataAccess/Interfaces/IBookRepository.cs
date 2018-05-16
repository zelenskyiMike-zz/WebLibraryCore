using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Interfaces
{
    public interface IBookRepository : IGenericRepository<Book>
    {
        Task<Book> GetBookDetails(int id);
        IEnumerable<Author> GetAuthorsNotExistInBook(Book book);
        IEnumerable<Book> GetAllBooksWithGenres();
    }
}
