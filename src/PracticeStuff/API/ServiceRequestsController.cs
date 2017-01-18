using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PracticeStuff.Services;
using PracticeStuff.API;
using PracticeStuff.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PracticeStuff.API
{
    [Route("api/[controller]")]
    public class ServiceRequestsController : Controller
    {

        IServiceRequestService _services;

        public ServiceRequestsController(IServiceRequestService services)
        {
            _services = services;
        }
        // GET: api/values
        [HttpGet]
        [Authorize(Policy = "AdminOnly")]
        public IActionResult Get()
        {
            var srvrqst = _services.GetAllServiceRequests();
            return Ok(srvrqst);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public IActionResult Get(int id)
        {
            var srvrqst = _services.getServiceRequest(id);
            return Ok(srvrqst);
        }

        // POST api/values
        [HttpPost]
        [Authorize(Policy = "AdminOnly")]
        public void Post([FromBody]ServiceRequest srvrqst)
        {
            if (ModelState.IsValid)
            {
                _services.AddServiceRequest(srvrqst);
            }
            else
            {
                BadRequest(ModelState);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public void Delete(int id)
        {
            _services.DeleteServiceRequest(id);



        }
    }
}

