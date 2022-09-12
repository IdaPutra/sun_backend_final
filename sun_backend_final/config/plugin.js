module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAY6TZOEUNKCWEZMGI',
        secretAccessKey: 'uCg0FDnGP8x+DjQTF56JrK2jhK97AOPZUb7RrdXT',
        region: 'us-east-1',
        params: {
          Bucket: 'unmute-images'// Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
        },
        logger: console // Only if you want to `stdout` logs
      }
    }
   });