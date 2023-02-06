/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.jira_ticket_teams (
  id BIGSERIAL,
  jira_id BIGINT NOT NULL,
  jira_team_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_jira_ticket_teams_jira_id
    FOREIGN KEY (jira_id)
    REFERENCES tickets.jira(id),
  CONSTRAINT fk_jira_ticket_teams_team_id
    FOREIGN KEY (jira_team_id)
    REFERENCES personnel.jira_teams(id)
);

CREATE INDEX IF NOT EXISTS idx_tickets_jira_ticket_teams
    ON  tickets.jira_ticket_teams(id);

COMMENT ON TABLE tickets.jira_ticket_teams IS '@omit delete
This is the jira table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.jira_ticket_teams.id IS '@omit create,update
The ID of jira ticket team association is assigned by the database';
COMMENT ON COLUMN tickets.jira_ticket_teams.jira_id IS '@omit create,update
The jira_id of jira assigned by the database';
COMMENT ON COLUMN tickets.jira_ticket_teams.jira_team_id IS '@omit create,update
The jira_team_id of jira assigned by the database';