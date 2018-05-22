using AutoMapper;
using WebLibraryCore.BusinessLogic.MappingProfiles;

namespace WebLibraryCore.BusinessLogic
{
    public class MappingInitailizer
    {
        public static void InitializeAutoMapper()
        {
            Mapper.Initialize(cfg =>
            {
                //cfg.AddProfile<AuthorMappingProfile>();
                cfg.AddProfile<BookMappingProfile>();
                cfg.AddProfile<ArticleMappingProfile>();
                cfg.AddProfile<MagazineMappingProfile>();
                cfg.AddProfile<PublicationMappingProfile>();
            });

        }
    }
}
