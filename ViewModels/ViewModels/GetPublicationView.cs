using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class GetPublicationView
    {
        public int PublicationID { get; set; }
        [Required]
        public int PublicationGenreID { get; set; }
        [Required]
        public string PublicationName { get; set; }
        [Required]
        public DateTime DateOfPublicationPublish { get; set; }

        public PublicationGenreView PublicationGenres { get; set; }

        public ICollection<GetAuthorView> Authors { get; set; }
    }
}
