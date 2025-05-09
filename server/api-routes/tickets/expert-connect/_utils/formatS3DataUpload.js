import _ from "lodash";
import { v4 as uuid } from "uuid";

export const formantS3DataUpload = (data) => {
  if (!data || !data) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const specifications = clonedData.specifications;
    const experConnect = clonedData.expertConnectTicket.data;

    return {
      id: uuid(),
      time: specifications.alerttime || null,
      deviceName: specifications.machineid || null,
      streamName: specifications.alertstreamname || null,
      erc: specifications.erc || null,
      sup: specifications.sup || null,
      bundle: specifications.bundlenumber || null,
      expert_connect_id: experConnect.id || null,
      expert_connect_tags:
        experConnect.tags && experConnect.tags.length ? experConnect.tags : [],
      expert_connect_url: experConnect.url || null,
      expert_connect_number: experConnect.number || null,
      expert_connect_created_date: experConnect.createdDate || null,
      expert_connect_updated_date: experConnect.updatedDate || null,
      jira_url: specifications.jiralink || null,
      formant_link: specifications.formantlink,
    };
  } catch (e) {
    console.log(
      "FAILED TO FORMAT S3 DATA FROM EXPERT CONNECT TICKET UPDATE: ",
      e.message
    );
    console.log(
      "FAILED TO FORMAT S3 DATA FROM EXPERT CONNECT TICKET UPDATE: ",
      e.stack
    );
    return null;
  }
};
