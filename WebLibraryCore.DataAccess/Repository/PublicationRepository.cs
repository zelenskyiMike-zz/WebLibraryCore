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
    public class PublicationRepository : GenericRepository<Publication>,IPublicationRepository
    {
        private readonly EFDbContext context;

        public PublicationRepository(EFDbContext context):base(context)
        {
            this.context = context;
        }

        public IEnumerable<Publication> GetAllPublicationsWithGenres()
        {
            return context.Publications.Include(g=>g.PublicationGenres);
        }

        public IEnumerable<Author> GetAuthorsNotExistInPublication(Publication entity)
        {
            var initBookAuthorList = entity.PublicationAuthors.Where(x => x.PublicationID == entity.PublicationID).Select(x => x.Authors).ToList();
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

        public async Task<Publication> GetPublicationDetails(int id)
        {
            var publication = /*await GetByID(id)*/id;
            //PublicationGenre genre = context.PublicationGenres.Where(x => x.PublicationGenreID == publication.PublicationGenreID).SingleOrDefault();

            //var authorList = book.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();

            Publication publicationVM = new Publication()
            {
                //PublicationID = publication.PublicationID,
                //PublicationName = publication.PublicationName,
                //DateOfPublicationPublish = publication.DateOfPublicationPublish,
                //PublicationGenres = genre
                ////Authors = authorList
            };
            return publicationVM;
        }
    }
}
