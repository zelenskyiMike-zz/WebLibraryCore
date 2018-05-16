using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLibraryCore.Entities.Entities;

namespace WebLibraryCore.DataAccess.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        Task Create(TEntity entity);
        Task<TEntity> GetByID(int id);
        Task Update(TEntity entity);
        Task Delete(int id);
    }
}
