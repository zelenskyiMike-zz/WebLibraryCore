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
    public class PublicationService
    {
        private readonly EFDbContext context;
        private readonly PublicationRepository publicationRepository;

        public PublicationService(EFDbContext context)
        {
            this.context = context;
            publicationRepository = new PublicationRepository(context);
        }

        public /*async*/ void Create(GetPublicationView publicationView)
        {
            var publication = Mapper.Map<GetPublicationView, Publication>(publicationView);
            /*await*/ publicationRepository.Create(publication);
        }

        public Task<GetPublicationView> GetPublicationByID(int id)
        {
            var publication = publicationRepository.GetByID(id);
            var publicationMaped = Mapper.Map</*Task<*/Publication, Task<GetPublicationView>>(publication);
            return publicationMaped;
        }

        public async void Update(GetPublicationView publicationView)
        {
            var publication = Mapper.Map<GetPublicationView, Publication>(publicationView);
            await publicationRepository.Update(publication);
        }

        public /*async*/ void Delete(int id)
        {
            /*await*/ publicationRepository.Delete(id);
        }


        public IEnumerable<GetPublicationView> GetAllPublicationsWithGenres()
        {
            var publications = publicationRepository.GetAllPublicationsWithGenres();
            var publicationsMapped = Mapper.Map<IEnumerable<Publication>, IEnumerable<GetPublicationView>>(publications);
            return publicationsMapped;
        }

        public IEnumerable<GetAuthorView> GetAuthorsNotExistInPublication(GetPublicationView publication)
        {
            var publicationMapped = Mapper.Map<GetPublicationView, Publication>(publication);
            var authors = publicationRepository.GetAuthorsNotExistInPublication(publicationMapped);
            var authorsMapped = Mapper.Map<IEnumerable<Author>, IEnumerable<GetAuthorView>>(authors);
            return authorsMapped;
        }

        public Task<GetPublicationView> GetPublicationDetails(int id)
        {
            var publicationDetails = publicationRepository.GetPublicationDetails(id);
            var publicationDetailsMapped = Mapper.Map<Task<Publication>, Task<GetPublicationView>>(publicationDetails);
            return publicationDetailsMapped;
        }
    }
}
