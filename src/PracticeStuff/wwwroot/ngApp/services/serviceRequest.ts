namespace PracticeStuff.Services {

    export class ServiceRequestService {
        public resource = "/api/serviceRequests";

        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {

        }

        public getServiceRequests() {
            return this.$http.get(this.resource);
        }

        public addServiceRequest(serviceRequest) {
            this.$http.post(this.resource, serviceRequest).then((response) => {
                this.$state.go("serviceRequestList");
            })
        }
        public removeServiceRequest() {
            this.$http.delete(this.resource + this.$stateParams["id"]).then((response) => {
                this.$state.go("serviceRequestList");
            })
        }
        public editServiceRequest(serviceRequest) {
            this.$http.post(this.resource, serviceRequest).then((response) => {
                this.$state.go("serviceRequestList");
            })
        }


    }
    angular.module("PracticeStuff").service("ServiceRequestService", ServiceRequestService);
}