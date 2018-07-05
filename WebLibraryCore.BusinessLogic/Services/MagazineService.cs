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
    public class MagazineService
    {
        private readonly EFDbContext context;
        private readonly MagazineRepository magazineRepository;

        public MagazineService(EFDbContext context)
        {
            this.context = context;
            magazineRepository = new MagazineRepository(context);
        }

        public /*async*/ void Create(GetMagazineView magazineView)
        {
            var magazine = Mapper.Map<GetMagazineView, Magazine>(magazineView);
            /*await*/ magazineRepository.Create(magazine);
        }

        public Task<GetMagazineView> GetmagazineByID(int id)
        {
            var magazine = magazineRepository.GetByID(id);
            var magazineMaped = Mapper.Map</*Task<*/Magazine, Task<GetMagazineView>>(magazine);
            return magazineMaped;
        }

        public /*async*/ void Update(GetMagazineView magazineView)
        {
            var magazine = Mapper.Map<GetMagazineView, Magazine>(magazineView);
            /*await*/ magazineRepository.Update(magazine);
        }

        public /*async*/ void Delete(int id)
        {
            /*await*/ magazineRepository.Delete(id);
        }


        public IEnumerable<GetMagazineView> GetAllMagazinesWithGenres()
        {
            var magazines = magazineRepository.GetAllMagazinesWithGenres();
            var magazinesMapped = Mapper.Map<IEnumerable<Magazine>, IEnumerable<GetMagazineView>>(magazines);
            return magazinesMapped;
        }

        public IEnumerable<GetAuthorView> GetAuthorsNotExistInMagazine(GetMagazineView magazine)
        {
            var magazineMapped = Mapper.Map<GetMagazineView, Magazine>(magazine);
            var authors = magazineRepository.GetAuthorsNotExistInMagazine(magazineMapped);
            var authorsMapped = Mapper.Map<IEnumerable<Author>, IEnumerable<GetAuthorView>>(authors);
            return authorsMapped;
        }

        public Task<GetMagazineView> GetMagazineDetails(int id)
        {
            var magazineDetails = magazineRepository.GetMagazineDetails(id);
            var magazineDetailsMapped = Mapper.Map<Task<Magazine>, Task<GetMagazineView>>(magazineDetails);
            return magazineDetailsMapped;
        }
    }
}
