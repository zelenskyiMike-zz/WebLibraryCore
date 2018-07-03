using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.DataAccess.Interfaces;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Repository
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity: class
    {
        private readonly EFDbContext context;
        public GenericRepository(EFDbContext context)
        {
            this.context = context;
        }
        public /*async Task*/void Create(TEntity entity)
        {
            /*await*/ context.Set<TEntity>().Add/*Async*/(entity);
            /*await*/ context.SaveChanges/*Async*/();
        }

        public async Task Update(TEntity entity)
        {
            context.Set<TEntity>().Update(entity);
            await context.SaveChangesAsync();
        }

        public void /*async Task*/ Delete(int id)
        {
            var  entity = /*await*/ GetByID(id);
            context.Set<TEntity>().Remove(entity);
            /*await */context.SaveChangesAsync();
        }

        public /*async Task<*/TEntity/*>*/ GetByID(int id)
        {
            return /*await*/ context.Set<TEntity>().Find/*Async*/(id);

            //return await context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync();
        }

    }
}
