using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.MappingProfiles
{
    public class AuthorMappingProfile : Profile
    {
        public AuthorMappingProfile()
        {
            //CreateMap<Author, AuthorView>().ForMember(dest => dest.Articles, opt => opt.MapFrom(a => a.ArticleAuthors
            //     .Select(ab => ab.Authors)))
            //     .ReverseMap()
            //     .PreserveReferences()
            //     .ForMember(dest => dest.ArticleAuthors, opt => opt.MapFrom(b => b.Articles
            //     .Select(a => new { b.AuthorID, Author = b, a.ArticleID, Article = a })));
        }
    }
}
