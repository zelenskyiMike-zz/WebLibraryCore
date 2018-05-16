using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.Entities.Entities
{
    public class Magazine
    {
        [Key]
        public int MagazineID { get; set; }
        [Required]
        public int MagazineGenreID { get; set; }
        [Required]
        public string MagazineName { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfMagazinePublish { get; set; }

        public MagazineGenre MagazineGenres { get; set; }

        public virtual ICollection<MagazineAuthor> MagazineAuthors { get; } = new List<MagazineAuthor>();

        [NotMapped]
        public List<int> AuthorsIDs { get; set; }
    }
}
