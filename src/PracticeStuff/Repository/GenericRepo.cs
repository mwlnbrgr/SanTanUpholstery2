using PracticeStuff.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeStuff.Repository
{
    public class GenericRepo : IGenericRepo
    {
        private ApplicationDbContext _db;
        public GenericRepo(ApplicationDbContext db)
        {
            _db = db;
        }
        //Generic query method
        public IQueryable<T> Query<T>() where T : class
        {
            return _db.Set<T>().AsQueryable();
        }
        //Add a new entity to a dbSet of that entity
        public void Add<T>(T entityToCreate) where T : class
        {
            _db.Set<T>().Add(entityToCreate);
            _db.SaveChanges();
        }
        //Generically update an existing entity
        public void Update<T>(T entityToUpdate) where T : class
        {
            _db.Set<T>().Update(entityToUpdate);
            _db.SaveChanges();
        }
        //Delete
        public void Delete<T>(T entityToDelete) where T : class
        {
            _db.Set<T>().Remove(entityToDelete);
            _db.SaveChanges();
        }

    }

}

    

