using System;
using System.Collections.Generic;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class ArticleGenreView
    {
        public int ArticleGenreID { get; set; }
        public string ArticleGenreName { get; set; }

        public ICollection<GetArticleView> Articles { get; set; }
    }
}
