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

       // [NotMapped]
      //  public BookGenre BookGenres { get; set; }
      //  [NotMapped]
        public IEnumerable<BookAuthor> BookAuthors { get; } = new List<BookAuthor>();


        //Not Shure
        //[NotMapped]
        //public List<int> AuthorsIDs { get; set; }
    }
}
