using Microsoft.DotNet.Cli.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeStuff.ViewModels
{
    public class RequestProducts
    {
        public ServicesRequest Id { get; set; }
        public ServicesRequest Customer { get; set; }
        public Product Name { get; set; }
        public Product Price { get; set; }
    }
} 
