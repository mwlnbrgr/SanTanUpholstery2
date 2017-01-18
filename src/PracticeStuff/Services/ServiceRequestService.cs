using PracticeStuff.Models;
using PracticeStuff.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeStuff.Services
{
    public class ServiceRequestService : IServiceRequestService
    {
        private IGenericRepo _repo;
        public ServiceRequestService(IGenericRepo repo)
        {
            _repo = repo;
        }
        //Return all Products
        public List<ServiceRequest> GetAllServiceRequests()
        {
            return _repo.Query<ServiceRequest>().ToList();
        }
        //Get by Id
        public ServiceRequest getServiceRequest(int id)
        {
            var serviceRequest = _repo.Query<ServiceRequest>().Where(p => p.Id == id).Select(p => new ServiceRequest {
                Id = p.Id,
                CustomerName = p.CustomerName,
                Products = p.Products
            }).FirstOrDefault();
            return serviceRequest;
        }
        //Add a Product
        public void AddServiceRequest(ServiceRequest serviceRequest)
        {
            if (serviceRequest.Id == 0)
            {
                _repo.Add(serviceRequest);
            }
            else
            {
                _repo.Update(serviceRequest);
            }
        }

        //Delete a product
        public void DeleteServiceRequest(int id)
        {
            var serviceRequest = _repo.Query<ServiceRequest>().Where(p => p.Id == id).FirstOrDefault();
            _repo.Delete(serviceRequest);


        }

    }
}
    

