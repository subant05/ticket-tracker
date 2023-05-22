import { makeAddInflectorsPlugin } from "graphile-utils";

export const SchemaResolver = makeAddInflectorsPlugin(
  {
    _tableName(table) {
      return table.tags.name || table.type.tags.name || table.name;
    },
  },
  true
);
