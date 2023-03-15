import _ from "lodash";

export function shouldCreateTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (
    (!clonedData.currentActiveTicket.length || clonedData.overrideDuplicates) &&
    clonedData.isStreamsValid &&
    clonedData.isAssociatedStreamsValid
  )
    return clonedData;
  else return null;
}
