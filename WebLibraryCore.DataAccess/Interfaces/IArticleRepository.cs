using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Interfaces
{
    public interface IArticleRepository
    {
        IEnumerable<Article> GetAllArticlesWithGenres();
        Task<Article> GetArticleDetails(int id);
        IEnumerable<Author> GetAuthorsNotExistInArticles(Article entity);
    }
}
