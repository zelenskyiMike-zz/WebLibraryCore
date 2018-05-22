using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.MappingProfiles
{
    public class PublicationMappingProfile : Profile
    {
        public PublicationMappingProfile()
        {
            CreateMap<Publication, GetPublicationView>().ForMember(dest => dest.Authors, opt => opt.MapFrom(a => a.PublicationAuthors
                 .Select(ab => ab.Authors)))
                 .ReverseMap()
                 .PreserveReferences()
                 .ForMember(dest => dest.PublicationAuthors, opt => opt.MapFrom(b => b.Authors
                 .Select(a => new { b.PublicationID, Publication = b, a.AuthorID, Author = a })));
        }
    }
}
