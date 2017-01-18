namespace PracticeStuff.Services {

    export class ImageService {
        public resource = "/api/images/";

        constructor(
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {

        }

        public getImages() {
           return this.$http.get(this.resource);
        }

        public addImage(image) {
            this.$http.post(this.resource, image).then((response) => {
                this.$state.go("gallery");
            })
        }
        public removeImage() {
            this.$http.delete(this.resource + this.$stateParams["id"]).then((response) => {
                this.$state.go("gallery");
            })
        }
       


    }
    angular.module("PracticeStuff").service("ImageService", ImageService);
}