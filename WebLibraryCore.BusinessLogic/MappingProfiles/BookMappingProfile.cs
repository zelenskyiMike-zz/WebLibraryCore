using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.MappingProfiles
{
    public class BookMappingProfile : Profile
    {
        public BookMappingProfile()
        {
            CreateMap<Book, GetBookView>().ForMember(dest => dest.Authors,opt => opt.MapFrom(a =>a.BookAuthors
                .Select(ab => ab.Authors)))
                .ReverseMap()
                .PreserveReferences()
                .ForMember(dest => dest.BookAuthors,opt => opt.MapFrom(b => b.Authors
                .Select(a => new { b.BookID, Book = b, a.AuthorID, Author = a })));
        }
    }
}