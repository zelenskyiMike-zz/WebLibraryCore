using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class PublicationAuthor
    {

        public int PublicationID { get; set; }

        public int AuthorID { get; set; }

        public Publication Publications { get; set; }
        public Author Authors { get; set; }
    }
}
