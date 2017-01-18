using System.Collections.Generic;
using PracticeStuff.Models;

namespace PracticeStuff.Services
{
    public interface IProductService
    {
        void AddProduct(Product product);
        void DeleteProduct(int id);
        List<Product> GetAllProducts();
        Product getProduct(int id);
    }
}