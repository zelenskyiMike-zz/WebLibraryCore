using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class MagazineAuthor
    {

        public int MagazineID { get; set; }

        public int AuthorID { get; set; }

        public Magazine Magazines { get; set; }
        public Author Authors { get; set; }
    }
}
