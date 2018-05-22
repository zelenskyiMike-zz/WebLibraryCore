using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class PublicationGenreView
    {
        public int PublicationGenreID { get; set; }
        [Required]
        public string PublicationGenreName { get; set; }

        public ICollection<GetPublicationView> Publications { get; set; }
    }
}
