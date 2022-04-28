import * as Minio from 'minio';

const { MINIO_USERNAME, MINIO_PASSWORD, MINIO_ENDPOINT } = process.env;

const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT as string,
  port: 80,
  useSSL: false,
  accessKey: MINIO_USERNAME as string,
  secretKey: MINIO_PASSWORD as string,
});

export default minioClient;
