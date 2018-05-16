using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class Publication
    {
        [Key]
        public int PublicationID { get; set; }
        [Required]
        public int PublicationGenreID { get; set; }
        [Required]
        public string PublicationName { get; set; }
        [Required]
        public DateTime DateOfPublicationPublish { get; set; }

        public PublicationGenre PublicationGenres { get; set; }

        public virtual ICollection<PublicationAuthor> PublicationAuthors { get; } = new List<PublicationAuthor>();
    }
}
