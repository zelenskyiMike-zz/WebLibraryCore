using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class GetArticleView
    {
        public int ArticleID { get; set; }
        [Required]
        public int ArticleGenreID { get; set; }
        [Required]
        public string ArticleName { get; set; }
        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DateOfArticlePublish { get; set; }

        public ArticleGenreView ArticleGenres { get; set; }

        public ICollection<GetAuthorView> Authors { get; set; } 
    }
}
