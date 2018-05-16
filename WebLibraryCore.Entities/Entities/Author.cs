using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class Author
    {
        [Key]
        public int AuthorID { get; set; }

        [Required(ErrorMessage = "Необходимо ввести имя и фамилию автора")]
        public string AuthorName { get; set; }

        public virtual ICollection<BookAuthor> BookAuthors { get; } = new List<BookAuthor>();

        public virtual ICollection<PublicationAuthor> PublicationAuthors { get; } = new List<PublicationAuthor>();

        public virtual ICollection<MagazineAuthor> MagazineAuthors { get; } = new List<MagazineAuthor>();

        public virtual ICollection<ArticleAuthor> ArticleAuthors { get; } = new List<ArticleAuthor>();

        [NotMapped]
        public List<int> BooksIDs { get; set; }
    }
}
