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
    public class MagazineRepository : GenericRepository<Magazine>,IMagazineRepository
    {
        private readonly EFDbContext context;

        public MagazineRepository(EFDbContext context):base(context)
        {
            this.context = context;
        }

        public IEnumerable<Magazine> GetAllMagazinesWithGenres()
        {
            return context.Magazines.Include(g => g.MagazineGenres);
        }

        public IEnumerable<Author> GetAuthorsNotExistInMagazine(Magazine entity)
        {
            var initBookAuthorList = entity.MagazineAuthors.Where(x => x.MagazineID == entity.MagazineID).Select(x => x.Authors).ToList();
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

        public async Task<Magazine> GetMagazineDetails(int id)
        {
            var magazine = /*await GetByID(id)*/ id;
            //MagazineGenre genre = context.MagazineGenres.Where(x => x.MagazineGenreID == magazine.MagazineGenreID).SingleOrDefault();

            //var authorList = book.BookAuthors.Where(x => x.BookID == book.BookID).Select(x => x.Authors).ToList();

            Magazine magazineVM = new Magazine()
            {
                //MagazineID = magazine.MagazineID,
                //MagazineName = magazine.MagazineName,
                //DateOfMagazinePublish= magazine.DateOfMagazinePublish,
                //MagazineGenres = genre
                ////Authors = authorList
            };
            return magazineVM;
        }
    }
}
