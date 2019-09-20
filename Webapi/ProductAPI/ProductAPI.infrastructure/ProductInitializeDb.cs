using ProductAPI.core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAPI.infrastructure
{
    public class ProductInitializeDb : DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
            {
                ProductID = "1",
                Color = "Red",
                Details="This is used To break things apart or people depending on the Situation",
                ExpiryDate=DateTime.Now,
                ImageUrl="abc,jpg",
                inStock=true,
                Price=400,
                Quantity=50,
                Rating=5,
                Title="Hammer"

            });
            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "White",
                Details = "This is an awesome project",
                ExpiryDate = DateTime.Now,
                ImageUrl = "xyz.jpg",
                inStock = true,
                Price = 400,
                Quantity = 30,
                Rating = 4,
                Title = "Milk"
            });
        }
    }
}
