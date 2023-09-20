/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.connection (
  id BIGSERIAL,
  formant_id BIGINT NOT NULL,
  jira_id BIGINT,
  expert_connect_id BIGINT,
  PRIMARY KEY(id),
  CONSTRAINT fk_formant
    FOREIGN KEY (formant_id)
    REFERENCES tickets.formant(id),
  CONSTRAINT fk_jira
    FOREIGN KEY (jira_id)
    REFERENCES tickets.jira(id),
  CONSTRAINT fk_expert_connect
    FOREIGN KEY (expert_connect_id)
    REFERENCES tickets.expert_connect(id),
  CONSTRAINT uq_formant_expert_connect_jira
    UNIQUE(formant_id, jira_id, expert_connect_id)
);

CREATE INDEX IF NOT EXISTS idx_tickets_connection_id ON tickets.connection(id);
CREATE INDEX IF NOT EXISTS idx_tickets_connection_formant ON tickets.connection(formant_id);
CREATE INDEX IF NOT EXISTS idx_tickets_connection_jira ON tickets.connection(jira_id);
CREATE INDEX IF NOT EXISTS idx_tickets_connection_expert_connect ON tickets.connection(expert_connect_id);

COMMENT ON TABLE tickets.connection IS '@omit delete
This id the connection table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.connection.id IS '@omit create,update
The ID of connection assigned by the database';
COMMENT ON COLUMN tickets.connection.formant_id IS '@omit create,update
The formant_id of connection assigned by the database';
COMMENT ON COLUMN tickets.connection.jira_id IS '@omit create,update
The jira_id of connection assigned by the database';
COMMENT ON COLUMN tickets.connection.expert_connect_id IS '@omit create,update
The expert_connect_id of connection assigned by the database';