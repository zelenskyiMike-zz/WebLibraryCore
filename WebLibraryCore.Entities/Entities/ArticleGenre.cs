using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class ArticleGenre
    {
        [Key]
        public int ArticleGenreID { get; set; }
        public string ArticleGenreName { get; set; }

        public List<Article> Articles { get; } = new List<Article>();
    }
}
