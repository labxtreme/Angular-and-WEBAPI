using ProductAPI.core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAPI.core.Repositories
{
    public interface IProductRepositories
    {
        void Add(Product p);
        void Edit(Product p);
        void Delete(string ProductID);
        IEnumerable<Product> GetProducts();
        Product GetById(string ProductId);
    }
}
