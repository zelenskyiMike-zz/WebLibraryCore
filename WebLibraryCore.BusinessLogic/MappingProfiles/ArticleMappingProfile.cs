using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.MappingProfiles
{
    public class ArticleMappingProfile : Profile
    {
        public ArticleMappingProfile()
        {
            CreateMap<Article, GetArticleView>().ForMember(dest => dest.Authors, opt => opt.MapFrom(a => a.ArticleAuthors
                     .Select(ab => ab.Authors)))
                     .ReverseMap()
                     .PreserveReferences()
                     .ForMember(dest => dest.ArticleAuthors, opt => opt.MapFrom(b => b.Authors
                     .Select(a => new { b.ArticleID, Article = b, a.AuthorID, Author = a })));
        }
    }
}
