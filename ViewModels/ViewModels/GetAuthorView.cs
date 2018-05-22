using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    public class GetAuthorView
    {
        public int AuthorID { get; set; }

        [Required(ErrorMessage = "Необходимо ввести имя и фамилию автора")]
        public string AuthorName { get; set; }

        public ICollection<GetBookView> Books { get; set; } 
        public ICollection<GetPublicationView> Publications { get; set; } 
        public ICollection<GetMagazineView> Magazines { get; set; }
        public ICollection<GetArticleView> Articles { get; set; }
    }
}
