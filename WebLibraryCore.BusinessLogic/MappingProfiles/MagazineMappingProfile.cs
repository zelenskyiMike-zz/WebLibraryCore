using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.MappingProfiles
{
    class MagazineMappingProfile : Profile
    {
        public MagazineMappingProfile()
        {
            CreateMap<Magazine, GetMagazineView>().ForMember(dest => dest.Authors, opt => opt.MapFrom(a => a.MagazineAuthors
                 .Select(ab => ab.Authors)))
                 .ReverseMap()
                 .PreserveReferences()
                 .ForMember(dest => dest.MagazineAuthors, opt => opt.MapFrom(b => b.Authors
                 .Select(a => new { b.MagazineID, Magazine = b, a.AuthorID, Author = a })));
        }
    }
}
