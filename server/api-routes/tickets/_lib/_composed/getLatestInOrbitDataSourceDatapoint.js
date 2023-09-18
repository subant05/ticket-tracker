import Congruity from "congruity";
import { getInOrbitDataSourceDefinitionFromComponentId } from "../_utils/getInOrbitDataSourceDefinitionFromComponentId.js";
import { getInOrbitRecentAttributeData } from "../_utils/getInOrbitRecentAttributeData.js";

export const getLatestInOrbitDataSourceDatapoint = Congruity.fn.asyncCompose(
  getInOrbitRecentAttributeData,
  getInOrbitDataSourceDefinitionFromComponentId
);
