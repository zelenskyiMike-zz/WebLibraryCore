using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Interfaces
{
    public interface IAuthorRepository
    {
        IEnumerable<Author> GetAllAuthors();

        IEnumerable<Book> GetBooksNotExistInAuthor(Author author);
        IEnumerable<Article> GetArticlesNotExistInAuthor(Author author);
        IEnumerable<Magazine> GetMagazinesNotExistInAuthor(Author author);
        IEnumerable<Publication> GetPublicationsNotExistInAuthor(Author author);

        //Task<Author> GetAuthorsDetails(int id);
    }
}
