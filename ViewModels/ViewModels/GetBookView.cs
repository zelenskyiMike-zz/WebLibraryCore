using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebLibraryCore.ViewModels.ViewModels
{
    [JsonObject]
    public class GetBookView
    {
        public int BookID { get; set; }
        public int GenreID { get; set; }

        [Required(ErrorMessage = "Неободимо добавить название книги")]
        public string BookName { get; set; }
        public int YearOfPublish { get; set; }

        //[NotMapped]
        //public BookGenreView BookGenres { get; set; }

        public ICollection<GetAuthorView> Authors { get; set; }
    }
}
