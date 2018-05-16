using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class Article
    {
        [Key]
        public int ArticleID { get; set; }
        [Required]
        public int ArticleGenreID { get; set; }
        [Required]
        public string ArticleName { get; set; }
        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DateOfArticlePublish { get; set; }

        public ArticleGenre ArticleGenres { get; set; }

        public virtual ICollection<ArticleAuthor> ArticleAuthors { get; } = new List<ArticleAuthor>();
    }
}
