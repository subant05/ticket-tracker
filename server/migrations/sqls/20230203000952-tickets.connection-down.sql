/* Replace with your SQL commands */
DROP TABLE IF EXISTS tickets.connection;
DROP INDEX IF EXISTS idx_tickets_connection_id ON tickets.connection(id);
DROP INDEX IF EXISTS idx_tickets_connection_formant ON tickets.connection(formant_id);
DROP INDEX IF EXISTS idx_tickets_connection_jira ON tickets.connection(jira_id);
DROP INDEX IF EXISTS idx_tickets_connection_expert_connect ON tickets.connection(expert_connect_id);