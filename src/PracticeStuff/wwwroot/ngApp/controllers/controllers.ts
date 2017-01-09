namespace PracticeStuff.Controllers {

    export class HomeController {
        
    }
    export class ImageController {

        public message; 
        public image;
        public images;
        constructor(private $http: ng.IHttpService) {
            $http.get(`/api/images`).then((results) => {
                this.images = results.data;
            });
        }

        //constructor(
        //    private $http: ng.IHttpService,
        //    private $stateParams: ng.ui.IStateParamsService,
        //    private $state: ng.ui.IStateService,
        //    private ImageService: PracticeStuff.Services.ImageService,
        //) {
        //    this.getImages();



        //}
        //public getImages() {
        //    return this.ImageService.getImages().then((res) => {
        //        this.images = res.data;
        //    });
        //}
        //public addImage() {
        //    this.ImageService.addImage(this.image);
        //}

        //public removeImage() {
        //    this.image = this.ImageService.removeImage();
        //}
        //public editImage() {
        //    this.ImageService.editImage(this.image);
        //}


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
