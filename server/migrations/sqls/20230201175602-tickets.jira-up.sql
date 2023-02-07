/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.jira (
  id BIGSERIAL,
  jira_ticket varchar(255) NOT NULL,
  jira_id BIGINT NOT NULL,
  project varchar(255) NOT NULL,
  description text NOT NULL,
  summary text NOT NULL,
  category varchar(25) NOT NULL,
  requirement varchar(50) NOT NULL,
  bundle INT NOT NULL,
  machine_type varchar(100) NOT NULL,
  priority varchar(25) NOT NULL,
  roadmap_item varchar(100) NOT NULL,
  team_id BIGINT NOT NULL,
  formant_link text,
  expert_connect_link text,
  issue_type varchar(25),
  bug_source varchar(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id),
  CONSTRAINT uq_jira_ticket
    UNIQUE (jira_ticket),
  CONSTRAINT fk_jira_team
    FOREIGN KEY (team_id)
    REFERENCES personnel.jira_teams(id)
);

CREATE INDEX IF NOT EXISTS idx_tickets_jira
    ON  tickets.jira(id);

COMMENT ON TABLE tickets.jira IS '@omit delete
This is the jira table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.jira.id IS '@omit create,update
The ID of jira ticket assigned by the database';
COMMENT ON COLUMN tickets.jira.jira_ticket IS '@omit create,update
The jira_ticket of jira assigned by the db admin or jira';
COMMENT ON COLUMN tickets.jira.jira_ticket IS '@omit create,update
The jira_ticket of jira assigned by the db admin or jira';
COMMENT ON COLUMN tickets.jira.project IS '@omit create,update
The project of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.description IS '@omit create,update
The description of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.summary IS '@omit create,update
The summary of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.category IS '@omit create,update
The category of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.requirement IS '@omit create,update
The requirement of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.bundle IS '@omit create,update
The bundle of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.machine_type IS '@omit create,update
The machine_type of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.roadmap_item IS '@omit create,update
The roadmap_item of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.roadmap_item IS '@omit create,update
The roadmap_item of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.formant_link IS '@omit create,update
The formant_link of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.expert_connect_link IS '@omit create,update
The expert_connect_link of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.issue_type IS '@omit create,update
The issue_type of jira assigned by the  jira';
COMMENT ON COLUMN tickets.jira.created_at IS '@omit create,update
The created_at of formamt assigned by the database';
COMMENT ON COLUMN tickets.jira.updated_at IS '@omit create,update
The updated_at of formamt assigned by the database';
COMMENT ON COLUMN tickets.jira.jira_id IS '@omit create,update
The jira_id of jira assigned by the expert connect';
COMMENT ON COLUMN tickets.jira.priority IS '@omit create,update
The priority of jira assigned by the jira';
COMMENT ON COLUMN tickets.jira.team_id IS '@omit create,update
The team_id of jira assigned by the jira';
COMMENT ON COLUMN tickets.jira.bug_source IS '@omit create,update
The bug_source of jira assigned by the jira';