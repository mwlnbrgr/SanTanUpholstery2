namespace PracticeStuff.Services {

    export class ProductService {
        public resource = "/api/products/";

        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {

        }

        public getProducts() {
            return this.$http.get(this.resource);
        }

        public addProduct(product) {
            this.$http.post(this.resource, product).then((response) => {
                this.$state.go("productList");
            })
        }
        public removeProduct() {
            this.$http.delete(this.resource + this.$stateParams["id"]).then((response) => {
                this.$state.go("productList");
            })
        }
        public editProduct(product) {
            this.$http.post(this.resource, product).then((response) => {
                this.$state.go("productList");
            })
        }


    }
    angular.module("PracticeStuff").service("ProductService", ProductService);
}