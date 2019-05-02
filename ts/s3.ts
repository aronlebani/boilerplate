import AWS from 'aws-sdk';

export class s3 {

  s3: Any;

  constructor() {
    AWS.config.update({region: 'ap-southeast-2'});

    this.s3 = new AWS.S3();
    this.bucket = 'BUCKET_NAME';
  }

  getObject(name: String): Promise<Any> {
    return new Promise<Any>((resolve, reject) => {
      const params = {
        Bucket: this.bucket,
        Key: name,
      };

      this.s3.getObject(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          reject(err);
        } else {
          resolve(data.Body);
        }
      });
    });
  }

  putObject(body: Number, name: String): Promise<Any> {
    return new Promise((resolve, reject) => {
      const params = {
        Body: body,
        Bucket: this.bucket,
        Key: name,
      };

      this.s3.putObject(params, (err,data) => {
        if (err) {
          console.log(err, err.stack);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
