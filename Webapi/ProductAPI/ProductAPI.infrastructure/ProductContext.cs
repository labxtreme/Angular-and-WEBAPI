using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using ProductAPI.core.Entities;

namespace ProductAPI.infrastructure
{
    public class ProductContext : DbContext
    {
        public ProductContext() : base("name=ProductContext")
        {
            var ConnStr = Database.Connection.ConnectionString;
        }

        public DbSet<Product> Products { get; set; }
    }
}
