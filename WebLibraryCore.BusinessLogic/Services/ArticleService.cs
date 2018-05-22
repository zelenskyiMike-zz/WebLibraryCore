using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.DataAccess;
using WebLibraryCore.DataAccess.Repository;
using WebLibraryCore.Entities.Entities;
using WebLibraryCore.ViewModels.ViewModels;

namespace WebLibraryCore.BusinessLogic.Services
{
    class ArticleService
    {
        private readonly EFDbContext context;
        private readonly ArticleRepository articleRepository;

        public ArticleService(EFDbContext context)
        {
            this.context = context;
            articleRepository = new ArticleRepository(context);
        }

        public async void Create(GetArticleView articleView)
        {
            var article = Mapper.Map<GetArticleView, Article>(articleView);
            await articleRepository.Create(article);
        }

        public Task<GetArticleView> GetarticleByID(int id)
        {
            var article = articleRepository.GetByID(id);
            var articleMaped = Mapper.Map<Task<Article>, Task<GetArticleView>>(article);
            return articleMaped;
        }

        public async void Update(GetArticleView articleView)
        {
            var article = Mapper.Map<GetArticleView, Article>(articleView);
            await articleRepository.Update(article);
        }

        public async void Delete(int id)
        {
            await articleRepository.Delete(id);
        }


        public IEnumerable<GetArticleView> GetAllArticlesWithGenres()
        {
            var articles = articleRepository.GetAllArticlesWithGenres();
            var articlesMapped = Mapper.Map<IEnumerable<Article>, IEnumerable<GetArticleView>>(articles);
            return articlesMapped;
        }

        public IEnumerable<GetAuthorView> GetAuthorsNotExistInArticle(GetArticleView article)
        {
            var articleMapped = Mapper.Map<GetArticleView, Article>(article);
            var authors = articleRepository.GetAuthorsNotExistInArticle(articleMapped);
            var authorsMapped = Mapper.Map<IEnumerable<Author>, IEnumerable<GetAuthorView>>(authors);
            return authorsMapped;
        }

        public Task<GetArticleView> GetArticleDetails(int id)
        {
            var articleDetails = articleRepository.GetArticleDetails(id);
            var articleDetailsMapped = Mapper.Map<Task<Article>, Task<GetArticleView>>(articleDetails);
            return articleDetailsMapped;
        }
    }
}
