
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Interfaces
{
    public interface IPublictionRepository
    {
        IEnumerable<Publication> GetAllPublicationsWithGenres();
        Task<Publication> GetPublicationDetails(int id);
        IEnumerable<Author> GetAuthorsNotExistInPublication(Publication entity);
    }
}
