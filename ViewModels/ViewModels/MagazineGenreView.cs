using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class MagazineGenreView
    {
        public int MagazineGenreID { get; set; }
        [Required]
        public string MagazineGenreName { get; set; }

        public ICollection<GetMagazineView> Magazines { get; set; }

    }
}
