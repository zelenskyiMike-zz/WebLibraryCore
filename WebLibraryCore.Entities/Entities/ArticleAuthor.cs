using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class ArticleAuthor
    {
        [Key, Column(Order = 1)]
        public int ArticleID { get; set; }
        [Key, Column(Order = 2)]
        public int AuthorID { get; set; }

        public Article Articles { get; set; }
        //public Author Authors { get; set; }
    }
}
