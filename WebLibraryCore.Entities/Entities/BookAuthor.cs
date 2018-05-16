using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class BookAuthor
    {
       
        public int BookID { get; set; }

        public int AuthorID { get; set; }

        public Book Books { get; set; }
        public Author Authors { get; set; }
    }
}
