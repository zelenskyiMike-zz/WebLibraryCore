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

        public IEnumerable<Article> Articles { get; set; }

        public ArticleGenre()
        {
            Articles = new List<Article>();
        }

        public IEnumerable<object> Where(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }
    }
}
