/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS personnel.expert_connect_contacts (
  id BIGSERIAL,
  ec_id varchar(255) NOT NULL,
  first_name varchar(255),
  last_name varchar(255),
  phone varchar(20),
  email varchar(100),
  PRIMARY KEY(id),
  CONSTRAINT uq_expert_connect_contact_id
    UNIQUE(ec_id)
);

CREATE INDEX IF NOT EXISTS idx_personnel_expert_connect_contacts
    ON personnel.expert_connect_contacts(id);

COMMENT ON TABLE personnel.expert_connect_contacts IS '@omit delete
This is the expert_connect_contacts table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN personnel.expert_connect_contacts.id IS '@omit create,update
The ID of expert_connect_contacts assigned by the database';
COMMENT ON COLUMN personnel.expert_connect_contacts.ec_id IS '@omit create,update
The ec_id of expert_connect_contacts assigned by the expert connect';
COMMENT ON COLUMN personnel.expert_connect_contacts.first_name IS '@omit create,update
The first_name of expert_connect_contacts assigned by the expert connect';
COMMENT ON COLUMN personnel.expert_connect_contacts.last_name IS '@omit create,update
The last_name of expert_connect_contacts assigned by the expert connect';

COMMENT ON COLUMN personnel.expert_connect_contacts.phone IS '@omit create,update
The phone of expert_connect_contacts assigned by the expert connect';
COMMENT ON COLUMN personnel.expert_connect_contacts.email IS '@omit create,update
The email of expert_connect_contacts assigned by the expert connect';