using ProductAPI.core.Entities;
using ProductAPI.core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAPI.infrastructure
{
    public class ProductRepository : IProductRepositories
    {
        private ProductContext context = new ProductContext();
        public void Add(Product p)
        {
            context.Products.Add(p);
            context.SaveChanges();
        }

        public void Delete(string ProductId)
        {
            Product b = context.Products.Find(ProductId);
            context.Products.Remove(b);
            context.SaveChanges();
        }

        public void Edit(Product p)
        {
            context.Entry(p).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
        }

        public Product GetById(string ProductId)
        {
            var product = (from r in context.Products where r.ProductID == ProductId select r).FirstOrDefault();
            return product;
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products;
        }
    }
}