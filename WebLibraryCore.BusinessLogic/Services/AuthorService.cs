using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.DataAccess;
using WebLibraryCore.DataAccess.Repository;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.Services
{
    public class AuthorService
    {
        private readonly EFDbContext context;
        private readonly AuthorRepository authorsRepository;

        public AuthorService(EFDbContext context)
        {
            this.context = context;
            authorsRepository = new AuthorRepository(context);
        }

        public async void Create(GetAuthorView authorView)
        {
            var authors = Mapper.Map<GetAuthorView, Author>(authorView);
            await authorsRepository.Create(authors);
        }

        public Task<GetAuthorView> GetAuthorByID(int id)
        {
            var authors = authorsRepository.GetByID(id);
            var authorsMaped = Mapper.Map<Task<Author>, Task<GetAuthorView>>(authors);
            return authorsMaped;
        }

        public async void Update(GetAuthorView authorView)
        {
            var authors = Mapper.Map<GetAuthorView, Author>(authorView);
            await authorsRepository.Update(authors);
        }

        public async void Delete(int id)
        {
            await authorsRepository.Delete(id);
        }


        public IEnumerable<GetAuthorView> GetAllAuthors()
        {
            var authorss = authorsRepository.GetAllAuthors();
            var authorssMapped = Mapper.Map<IEnumerable<Author>, IEnumerable<GetAuthorView>>(authorss);
            return authorssMapped;
        }

        public IEnumerable<GetArticleView> GetArticlesNotExistInAuthor(GetAuthorView author)
        {
            var authorsMapped = Mapper.Map<GetAuthorView, Author>(author);
            var articles = authorsRepository.GetArticlesNotExistInAuthor(authorsMapped);
            var articlesMapped = Mapper.Map<IEnumerable<Article>, IEnumerable<GetArticleView>>(articles);
            return articlesMapped;
        }
        public IEnumerable<GetBookView> GetBooksNotExistInAuthor(GetAuthorView author)
        {
            var authorsMapped = Mapper.Map<GetAuthorView, Author>(author);
            var books = authorsRepository.GetBooksNotExistInAuthor(authorsMapped);
            var booksMapped = Mapper.Map<IEnumerable<Book>, IEnumerable<GetBookView>>(books);
            return booksMapped;
        }
        public IEnumerable<GetMagazineView> GetMagazinesNotExistInAuthor(GetAuthorView author)
        {
            var authorsMapped = Mapper.Map<GetAuthorView, Author>(author);
            var magazines = authorsRepository.GetMagazinesNotExistInAuthor(authorsMapped);
            var magazinesMapped = Mapper.Map<IEnumerable<Magazine>, IEnumerable<GetMagazineView>>(magazines);
            return magazinesMapped;
        }
        public IEnumerable<GetPublicationView> GetPublicationsNotExistInAuthor(GetAuthorView author)
        {
            var authorsMapped = Mapper.Map<GetAuthorView, Author>(author);
            var publications = authorsRepository.GetPublicationsNotExistInAuthor(authorsMapped);
            var publicationsMapped = Mapper.Map<IEnumerable<Publication>, IEnumerable<GetPublicationView>>(publications);
            return publicationsMapped;
        }
    }
}
