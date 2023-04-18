/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS personnel.expert_connect_teams (
  id BIGSERIAL,
  ec_id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  division INT DEFAULT 0,
  template INT DEFAULT 0,
  PRIMARY KEY(id),
  CONSTRAINT uq_expert_connect_teams_name
    UNIQUE(name)

CREATE INDEX IF NOT EXISTS idx_personnel_expert_connect_teams
    ON personnel.expert_connect_teams(id);

COMMENT ON TABLE personnel.expert_connect_teams IS '@omit delete
This is the expert_connect_teams table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN personnel.expert_connect_teams.id IS '@omit create,update
The ID of expert_connect_teams assigned by the database';
COMMENT ON COLUMN personnel.expert_connect_teams.ec_id IS '@omit create,update
The ec_id of expert_connect_teams assigned by the expert connect';
COMMENT ON COLUMN personnel.expert_connect_teams.name IS '@omit create,update
The name of expert_connect_teams assigned by the expert connect';
COMMENT ON COLUMN personnel.expert_connect_teams.division IS '@omit create,update
The division of expert_connect_teams assigned by the expert connect';
COMMENT ON COLUMN personnel.expert_connect_teams.template IS '@omit create,update
The template of expert_connect_teams assigned by the expert connect';