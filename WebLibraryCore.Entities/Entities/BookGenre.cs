using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class BookGenre
    {
        [Key]
        public int GenreID { get; set; }
        public string GenreName { get; set; }

        public IEnumerable<Book> Books { get; } = new List<Book>();
    }
}
