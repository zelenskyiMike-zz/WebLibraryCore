using AutoMapper;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.DataAccess;
using WebLibraryCore.DataAccess.Repository;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.Services
{
    public class BookService
    {
        private readonly BookRepository bookRepository;
        private readonly EFDbContext context;

        public BookService(EFDbContext context)
        {
            this.context = context;
            bookRepository = new BookRepository(context);
        }


        public async void Create(GetBookView bookView)
        {
            var book = Mapper.Map<GetBookView, Book>(bookView);
            await bookRepository.Create(book);
        }

        public Task<GetBookView> GetBookByID(int id)
        {
            var book = bookRepository.GetByID(id);
            var bookMaped = Mapper.Map<Task<Book>, Task<GetBookView>>(book);
            return bookMaped;
        }

        public async void Update(GetBookView bookView)
        {
            var book = Mapper.Map<GetBookView, Book>(bookView);
            await bookRepository.Update(book);
        }

        public /*async*/ void Delete(int id)
        {
            /*await*/ bookRepository.Delete(id);
        }


        public IEnumerable<GetBookView> GetAllBooksWithGenres()
        {
            var books = bookRepository.GetAllBooksWithGenres();
            var booksMapped = Mapper.Map<IEnumerable<Book>, IEnumerable<GetBookView>>(books);
            return booksMapped;
        }

        public IEnumerable<GetAuthorView> GetAuthorsNotExistInBook(GetBookView book)
        {
            var bookMapped = Mapper.Map<GetBookView, Book>(book);
            var authors = bookRepository.GetAuthorsNotExistInBook(bookMapped);
            var authorsMapped = Mapper.Map<IEnumerable<Author>, IEnumerable<GetAuthorView>>(authors);
            return authorsMapped;
        }

        public Task<GetBookView> GetBookDetails(int id)
        {
            var bookDetails = bookRepository.GetBookDetails(id);
            var bookDetailsMapped = Mapper.Map<Task<Book>, Task<GetBookView>>(bookDetails);
            return bookDetailsMapped;
        }
    }
}
