using System.Collections.Generic;
using PracticeStuff.Models;

namespace PracticeStuff.Services
{
    public interface IServiceRequestService
    {
        void AddServiceRequest(ServiceRequest serviceRequest);
        void DeleteServiceRequest(int id);
        List<ServiceRequest> GetAllServiceRequests();
        ServiceRequest getServiceRequest(int id);
    }
}