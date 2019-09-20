using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductAPI.infrastructure;
using System.Linq;

namespace ProductTest
{
    [TestClass]
    public class ProductAPI
    {
        ProductRepository repo;
        [TestInitialize]
        public void TestSetUp()
        {
            ProductInitializeDb db = new ProductInitializeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();
        }
        [TestMethod]
        public void Test1fortwoEntries()
        {
            var result = repo.GetProducts();
            Assert.IsNotNull(result);
            var numberOfRecords = result.ToList().Count;
            Assert.AreEqual(2, numberOfRecords);

        }
    }
}
