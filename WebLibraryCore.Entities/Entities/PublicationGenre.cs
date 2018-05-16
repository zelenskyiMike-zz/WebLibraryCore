using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class PublicationGenre
    {
        [Key]
        public int PublicationGenreID { get; set; }
        [Required]
        public string PublicationGenreName { get; set; }

        public virtual IEnumerable<Publication> Publications { get; set; }

        public PublicationGenre()
        {
            Publications = new List<Publication>();
        }
    }
}
