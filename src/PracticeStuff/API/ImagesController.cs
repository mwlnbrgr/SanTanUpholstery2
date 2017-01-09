using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PracticeStuff.Services;
using PracticeStuff.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PracticeStuff.API
{
    [Route("api/[controller]")]
    public class ImagesController : Controller
    {

        IImageService _services;

        public ImagesController(IImageService services)
        {
            _services = services;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var imageList = _services.GetAllImages();
            return Ok(imageList);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var image = _services.getImage(id);
            return Ok(image);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Image image)
        {
            if (ModelState.IsValid)
            {
                _services.AddImage(image);
            }
            else
            {
                BadRequest(ModelState);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _services.DeleteImage(id);



        }
    }
}
