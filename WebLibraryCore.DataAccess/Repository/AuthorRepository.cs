using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.DataAccess.Interfaces;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Repository
{
    public class AuthorRepository:GenericRepository<Author>,IAuthorRepository
    {
        private readonly EFDbContext context;

        public AuthorRepository(EFDbContext context):base(context)
        {
            this.context = context;
        }

        public IEnumerable<Author> GetAllAuthors()
        {
            return context.Authors;
        }

        public IEnumerable<Article> GetArticlesNotExistInAuthor(Author author)
        {
            List<Article> finalListOfArticles = new List<Article>();

            var initArticleAuthorList = author.ArticleAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Articles).ToList();

            foreach (var item in context.Articles.ToList())
            {
                if (!initArticleAuthorList.Contains(item))
                {
                    finalListOfArticles.Add(item);
                }
            }
            return finalListOfArticles;
        }

        public IEnumerable<Book> GetBooksNotExistInAuthor(Author author)
        {
            List<Book> finalListOfBooks = new List<Book>();

            var initBookAuthorList = author.BookAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Books).ToList();

            foreach (var item in context.Books.ToList())
            {
                if (!initBookAuthorList.Contains(item))
                {
                    finalListOfBooks.Add(item);
                }
            }
            return finalListOfBooks;
        }

        public IEnumerable<Magazine> GetMagazinesNotExistInAuthor(Author author)
        {
            List<Magazine> finalListOfMagazines = new List<Magazine>();

            var initMagazineAuthorsList = author.MagazineAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Magazines).ToList();

            foreach (var item in context.Magazines.ToList())
            {
                if (!initMagazineAuthorsList.Contains(item))
                {
                    finalListOfMagazines.Add(item);
                }
            }
            return finalListOfMagazines;
        }

        public IEnumerable<Publication> GetPublicationsNotExistInAuthor(Author author)
        {
            List<Publication> finalListOfPublication = new List<Publication>();

            var initPublicationsAuthorList = author.PublicationAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Publications).ToList();

            foreach (var item in context.Publications.ToList())
            {
                if (!initPublicationsAuthorList.Contains(item))
                {
                    finalListOfPublication.Add(item);
                }
            }
            return finalListOfPublication;
        }

        //public async Task<Author> GetAuthorsDetails(int id)
        //{
        //    var author = await GetByID(id);
        //    List<Book> booksList = author.BookAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Books).ToList();
        //    List<Article> articlesList = author.ArticleAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Articles).ToList();
        //    List<Magazine> magazinesList = author.MagazineAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Magazines).ToList();
        //    List<Publication> publicationsList = author.PublicationAuthors.Where(x => x.AuthorID == author.AuthorID).Select(x => x.Publications).ToList();

        //    Author authorVM = new Author()
        //    {
        //        AuthorID = author.AuthorID,
        //        AuthorName = author.AuthorName,
        //        Books = booksList,
        //        Articles = articlesList,
        //        Magazines = magazinesList,
        //        Publications = publicationsList
        //    };
        //    return authorVM;
        //}

    }
}
