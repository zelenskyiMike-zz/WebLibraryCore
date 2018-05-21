using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Interfaces
{
    public interface IMagazieRepository
    {
        IEnumerable<Magazine> GetAllMagazinesWithGenres();
        Task<Magazine> GetMagazineDetails(int id);
        IEnumerable<Author> GetAuthorsNotExistInMagazine(Magazine entity);
    }
}
