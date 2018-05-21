using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class Book
    {
        [Key]
        public int BookID { get; set; }
        public int GenreID { get; set; }

        [Required(ErrorMessage = "Неободимо добавить название книги")]
        public string BookName { get; set; }
        public int YearOfPublish { get; set; }

        public BookGenre BookGenres { get; set; }

        public virtual ICollection<BookAuthor> BookAuthors { get; } = new List<BookAuthor>();

        [NotMapped]
        public List<int> AuthorsIDs { get; set; }
    }
}
