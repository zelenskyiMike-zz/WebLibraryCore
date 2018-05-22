using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class GetMagazineView
    {
        public int MagazineID { get; set; }
        [Required]
        public int MagazineGenreID { get; set; }
        [Required]
        public string MagazineName { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfMagazinePublish { get; set; }

        public MagazineGenreView MagazineGenres { get; set; }

        public ICollection<GetAuthorView> Authors { get; set; }
    }
}
