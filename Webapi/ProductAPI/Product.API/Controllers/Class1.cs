using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ProductAPI.infrastructure;
using ProductAPI.core.Entities;
using ProductAPI.core.Repositories;

namespace WebApplication.Controllers
{
    public class ProductsController : ApiController
    {
        private IProductRepositories db;

        public ProductsController(IProductRepositories repository)
        {
            db = repository;
        }

        //private ProductRepository db = new ProductRepository();

        // GET: api/Products
        public IEnumerable<ProductAPI.core.Entities.Product> GetProducts()
        {
            return db.GetProducts();
        }

        // GET: api/Products/5
        [ResponseType(typeof(ProductAPI.core.Entities.Product))]
        public IHttpActionResult GetProduct(string id)
        {
            ProductAPI.core.Entities.Product product = db.GetById(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }




        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult PutProduct(string id, ProductAPI.core.Entities.Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.ProductID)
            {
                return BadRequest();
            }

            //db.Entry(product).State = EntityState.Modified;
            db.Edit(product);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(ProductAPI.core.Entities.Product))]
        public IHttpActionResult PostProduct(ProductAPI.core.Entities.Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Add(product);

            return CreatedAtRoute("DefaultApi", new { id = product.ProductID }, product);
        }


        // DELETE: api/Products/5
        [ResponseType(typeof(ProductAPI.core.Entities.Product))]
        public IHttpActionResult DeleteProduct(string id)
        {
            ProductAPI.core.Entities.Product product = db.GetById(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Delete(id);
            return Ok(product);
        }


    }
}