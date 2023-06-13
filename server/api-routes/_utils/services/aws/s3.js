import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const {
  STORAGE_ENDPOINT,
  STORAGE_ACCESS_KEY_ID,
  STORAGE_SECRET_ACCESS_KEY,
  STORAGE_PACKAGES_BUCKET,
} = process.env;

const ep = new AWS.Endpoint(STORAGE_ENDPOINT);
const s3 = new AWS.S3({
  // endpoint: ep,
  region: "us-west-2",
  accessKeyId: STORAGE_ACCESS_KEY_ID,
  secretAccessKey: STORAGE_SECRET_ACCESS_KEY,
});

const listBucketFiles = async (bucket) => {
  const list = await s3.listObjectsV2({ Bucket: bucket }).promise();
  return list.Contents;
};

export const listTickets = async () => {
  return await listBucketFiles(STORAGE_PACKAGES_BUCKET);
};
//

export const uploadTicket = (data) =>
  new Promise((resolve, reject) => {
    if (!data || !data) return null;

    const key = `${data.time}_${data.deviceName}_${data.streamName}`;
    var buf = Buffer.from(JSON.stringify(data));

    s3.upload(
      {
        Bucket: STORAGE_PACKAGES_BUCKET,
        Key: Buffer.from(key).toString("base64url"),
        Body: buf,
        ContentEncoding: "utf-8",
        ContentType: "application/json",
      },
      function (err, data) {
        if (err) {
          console.log(err);
          console.log("Error uploading data: ", data);
          reject(err);
        } else {
          console.log("succesfully uploaded!!!");
          console.log("DATA UPLOADED TO S3: ", key);
          resolve(data);
        }
      }
    );
  });
