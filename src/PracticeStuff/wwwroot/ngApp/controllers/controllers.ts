namespace PracticeStuff.Controllers {

    export class HomeController {

    }
    export class ImageController {

        public message;
        public image;
        public images;
        constructor(
            private $http: ng.IHttpService,
            private $state: ng.ui.IStateService) {
            $http.get(`/api/images`).then((results) => {
                this.images = results.data;
            })
        }
        public addImage() {
            this.$http.post("/api/images/", this.images).then((response) => {
                this.$state.go("gallery");
            })
        }
        //public removeImage() {
        //    this.$http.delete("/api/images/", this.images).then((response) => {
        //        this.$state.go("gallery");
        //    })
        //}
    }
    export class ProductController {

        public product;
        public products;
        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private ProductService: PracticeStuff.Services.ProductService
        ) {
            this.getProducts();
        }
        public getProducts() {
            return this.ProductService.getProducts().then((res) => {
                this.products = res.data;
            });
        }
        public addProduct() {
            this.ProductService.addProduct(this.product);
        }

        public removeProduct() {
            this.product = this.ProductService.removeProduct();
        }
        public editProduct() {
            this.ProductService.editProduct(this.product);
        }
    }
    export class EditProductController {
        public product;
        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private ProductService: PracticeStuff.Services.ProductService
        ) {
            this.$http.get("/api/products/" + $stateParams["id"]).then((response) => {
                this.product = response.data;
            })
        }
        public editProduct() {
            this.ProductService.editProduct(this.product);
        }

    }

    export class SRDetailsController {

        public serviceRequest;
        
        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private ServiceRequestService: PracticeStuff.Services.ServiceRequestService,
        ) {
            
            this.$http.get("/api/serviceRequests/" + $stateParams["id"]).then((resp) => {
                this.serviceRequest = resp.data;
            })
        }


    }

    export class ServiceRequestController {

        public serviceRequest;
        public serviceRequests;
        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private ServiceRequestService: PracticeStuff.Services.ServiceRequestService,
        ) {
            this.getServiceRequests(); 
             
        }
        public getServiceRequests() {
            this.ServiceRequestService.getServiceRequests().then((res) => {
                this.serviceRequests = res.data;
            });

        }
        public addServiceRequest() {
            this.ServiceRequestService.addServiceRequest(this.serviceRequest);
        }

        public removeServiceRequest() {
            this.serviceRequest = this.ServiceRequestService.removeServiceRequest();
        }
        public editServiceRequest() {
            this.ServiceRequestService.editServiceRequest(this.serviceRequest);
        }


    }
    export class EditServiceRequestController {
        public serviceRequest;
        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private ServiceRequestService: PracticeStuff.Services.ServiceRequestService,
        ) {
            this.$http.get("/api/serviceRequests/" + $stateParams["id"]).then((response) => {
                this.serviceRequest = response.data;
            })
        }
        public editServiceRequest() {
            this.ServiceRequestService.editServiceRequest(this.serviceRequest);
        }

    }


    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }


    export class AboutController {
        public message = '';
    }

    export class ContactController {
        public message = `Have questions? Drop us a line!`;
    }



}