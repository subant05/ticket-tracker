/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS personnel.jira_teams (
  id BIGSERIAL,
  name varchar(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT uq_name
    UNIQUE (name)
);

CREATE INDEX IF NOT EXISTS idx_personnel_jira_teams
    ON  personnel.jira_teams(id);

COMMENT ON TABLE personnel.jira_teams IS '@omit delete
This is the jira_teams table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN personnel.jira_teams.id IS '@omit create,update
The ID of jira_teams assigned by the database';
COMMENT ON COLUMN personnel.jira_teams.name IS '@omit create,update
The name of jira_teams assigned by the db admin or jira';

INSERT INTO personnel.jira_teams (name) VALUES ('Robotics')
ON CONFLICT DO NOTHING;