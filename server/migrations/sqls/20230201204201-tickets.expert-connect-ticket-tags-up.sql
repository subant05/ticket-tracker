/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.expert_connect_ticket_tags (
  id BIGSERIAL,
  ticket_id BIGINT NOT NULL,
  tag_id BIGINT NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT fk_ticket_tags_ticket_id
    FOREIGN KEY (ticket_id)
    REFERENCES tickets.expert_connect(id),
  CONSTRAINT fk_ticket_tags_ec_tag
    FOREIGN KEY (tag_id)
    REFERENCES tags.expert_connect(id)
);

CREATE INDEX IF NOT EXISTS idx_ticket_ec_ticket_tags ON tickets.expert_connect_ticket_tags(id);

COMMENT ON TABLE tickets.expert_connect_ticket_tags IS '@omit delete
This is the expert_connect_ticket_tags table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.expert_connect_ticket_tags.id IS '@omit create,update
The ID of expert_connect_ticket_tags assigned by the database';
COMMENT ON COLUMN tickets.expert_connect_ticket_tags.ticket_id IS '@omit create,update
The ticket_id of expert_connect_ticket_tags assigned by the database';
COMMENT ON COLUMN tickets.expert_connect_ticket_tags.tag_id IS '@omit create,update
The tag_id of expert_connect_ticket_tags assigned by the database';