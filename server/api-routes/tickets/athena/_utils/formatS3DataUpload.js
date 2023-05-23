import _ from "lodash";
import { v4 as uuid } from "uuid";

export const formantS3DataUpload = (data) => {
  if (!data || !data) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const experConnect = clonedData.expertConnectTicket.data;

    return {
      id: uuid(),
      time: clonedData.time || null,
      deviceName: clonedData.device_name || null,
      streamName: clonedData.stream_name || null,
      erc: clonedData.ERC || null,
      sup: clonedData.SUP || null,
      bundle: clonedData.bundle || null,
      expert_connect_id: experConnect.id || null,
      expert_connect_tags:
        experConnect.tags && experConnect.tags.length ? experConnect.tags : [],
      expert_connect_url: experConnect.url || null,
      expert_connect_number: experConnect.number || null,
      expert_connect_created_date: experConnect.createdDate || null,
      expert_connect_updated_date: experConnect.updatedDate || null,
      jira_url: clonedData.jiraUrl || null,
    };
  } catch (e) {
    console.log("FAILED TO FORMAT S3 DATA FROM ATHENA: ", e.message);
    console.log("FAILED TO FORMAT S3 DATA FROM ATHENA: ", e.stack);
    return null;
  }
};
