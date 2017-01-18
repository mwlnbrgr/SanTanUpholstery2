using PracticeStuff.Models;
using PracticeStuff.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeStuff.Services
{
    public class ProductService : IProductService   
    {
        private IGenericRepo _repo;
        public ProductService(IGenericRepo repo)
        {
            _repo = repo;
        }
     
        public List<Product> GetAllProducts()
        {
            return _repo.Query<Product>().ToList();
        }
     
        public Product getProduct(int id)
        {
            var product = _repo.Query<Product>().Where(p => p.Id == id).FirstOrDefault();
            return product;
        }
       
        public void AddProduct(Product product)
        {
            if (product.Id == 0)
            {
                _repo.Add(product);
            }
            else
            {
                _repo.Update(product);
            }
        }

       
        public void DeleteProduct(int id)
        {
            var product = _repo.Query<Product>().Where(p => p.Id == id).FirstOrDefault();
            _repo.Delete(product);


        }

    }
}

    

