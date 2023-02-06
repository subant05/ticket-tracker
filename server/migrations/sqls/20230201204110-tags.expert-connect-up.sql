/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tags.expert_connect (
  id BIGSERIAL,
  ec_id varchar(50) NOT NULL,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS idx_tags_expert_connect ON tags.expert_connect(id);

COMMENT ON TABLE tags.expert_connect IS '@omit delete
This is the expert_connect_contacts table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tags.expert_connect.id IS '@omit create,update
The ID of expert_connect_contacts assigned by the database';
COMMENT ON COLUMN tags.expert_connect.ec_id IS '@omit create,update
The ec_id of expert_connect_contacts assigned by the expert connect';
COMMENT ON COLUMN tags.expert_connect.name IS '@omit create,update
The name of expert_connect_contacts assigned by the expert connect';
COMMENT ON TABLE tags.expert_connect IS E'@name tags.expert_connect_tags';