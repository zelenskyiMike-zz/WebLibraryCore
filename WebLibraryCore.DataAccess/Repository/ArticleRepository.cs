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
    public class ArticleRepository :GenericRepository<Article>,IArticleRepository
    {
        private readonly EFDbContext context;

        public ArticleRepository(EFDbContext context):base(context)
        {
            this.context = context;
        }

        public IEnumerable<Article> GetAllArticlesWithGenres()
        {
            return context.Articles.Include(g => g.ArticleGenres);
        }

        public IEnumerable<Author> GetAuthorsNotExistInArticle(Article entity)
        {
            var initBookAuthorList = entity.ArticleAuthors.Where(x => x.ArticleID == entity.ArticleID).Select(x => x.Authors).ToList();
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

        public async Task<Article> GetArticleDetails(int id)
        {
            var article = await GetByID(id);
            ArticleGenre genre = context.ArticleGenres.Where(x => x.ArticleGenreID == article.ArticleGenreID).SingleOrDefault();

            //var authorList = book.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();

            Article articleVM = new Article()
            {
                ArticleID = article.ArticleID,
                ArticleName = article.ArticleName,
                DateOfArticlePublish = article.DateOfArticlePublish,
                ArticleGenres = genre
                //Authors = authorList
            };
            return articleVM;
        }
    }
}
