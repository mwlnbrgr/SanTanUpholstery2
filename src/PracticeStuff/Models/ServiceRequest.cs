using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeStuff.Models
{
    public class ServiceRequest
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
