/**
 * Created by balate on 1/4/17.
 */


angular.module("pickandgol").component("uploadPicture", {
    /*    bindings: {
     $router: "<"
     },

     restrict: 'AE',
     templateUrl: "views/aws-picture.html",
     scope: {
     file: '@'
     },
     link: function (scope, el, attrs) {
     el.bind('change', function (event) {
     var files = event.target.files;
     var file = files[0];
     scope.file = file;
     scope.$parent.file = file;
     scope.$apply();
     });
     },*/

    templateUrl: "views/form-picture.html",


    controller: function(){

        var self = this;

        self.creds = {
            bucket: 'balate',
            access_key: 'AKIAIB7DZRGUTJTBRN2Q',
            secret_key: '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'
        };


        self.upload = function () {


            // Configure The S3 Object
            AWS.config.update({accessKeyId: self.creds.access_key, secretAccessKey: self.creds.secret_key});
            AWS.config.region = 'eu-west-1';
            var bucket = new AWS.S3({params: {Bucket: self.creds.bucket}});
            console.log('entrandooooooooo'+ self.file);

            if (self.file) {
                console.log('entrandooooooooo fileee');
                var params = {
                    Key: self.file.name,
                    ContentType: self.file.type,
                    Body: self.file,
                    ServerSideEncryption: 'AES256'
                };

                bucket.putObject(params, function (err, data) {
                    if (err) {
                        // There Was An Error With Your S3 Config
                        console.log('fallacooo');
                        alert(err.message);
                        return false;
                    }
                    else {
                        console.log('entrandooooooo upload ');
                        // Success!
                        alert('Upload Done');
                        console.log('dataaa'+ data);
                    }
                })
                    .on('httpUploadProgress', function (progress) {
                        // Log Progress Information
                        console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
                    });
            }
            else {
                // No File Selected
                alert('No File Selected');
            }
        }
    }
});

