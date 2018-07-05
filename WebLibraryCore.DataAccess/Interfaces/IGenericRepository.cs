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
        /*Task*/void Create(TEntity entity);
        /*Task<*/TEntity/*> */GetByID(int id);
        /*Task*/void Update(TEntity entity);
        /*Task*/void Delete(int id);
    }
}
