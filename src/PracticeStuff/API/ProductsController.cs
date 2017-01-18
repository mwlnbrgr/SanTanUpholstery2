using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PracticeStuff.Services;
using PracticeStuff.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PracticeStuff.API
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {

        IProductService _services;

        public ProductsController(IProductService services)
        {
            _services = services;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var prodList = _services.GetAllProducts();
            return Ok(prodList);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var prod = _services.getProduct(id);
            return Ok(prod);
        }

        [HttpPost]
        [Authorize(Policy = "AdminOnly")]
        public void Post([FromBody]Product prod)
        {
            if (ModelState.IsValid)
            {
                _services.AddProduct(prod);
            }
            else
            {
                BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public void Delete(int id)
        {
            _services.DeleteProduct(id);



        }
    }
}

