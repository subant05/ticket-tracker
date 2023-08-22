/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.bag_monitoring (
  id BIGSERIAL,
  error_message text NOT NULL,
  error_code INT NOT NULL,
  vpu_position INT NOT NULL,
  time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  vehicle_name varchar(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY(id)
);


CREATE INDEX IF NOT EXISTS idx_tickets_bag_monitoring_id ON tickets.bag_monitoring(id);
CREATE INDEX IF NOT EXISTS idx_tickets_bag_monitoring_vpu_position ON tickets.bag_monitoring(vpu_position);
CREATE INDEX IF NOT EXISTS idx_tickets_bag_monitoring_vehicle_name ON tickets.bag_monitoring(vehicle_name);
CREATE INDEX IF NOT EXISTS idx_tickets_bag_monitoring_error_code ON tickets.bag_monitoring(error_code);

COMMENT ON TABLE "tickets"."bag_monitoring" IS E'@name bag_monitoring_tickets';
COMMENT ON TABLE tickets.bag_monitoring IS '@omit delete
This is the bag_monitoring table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.bag_monitoring.id IS '@omit create,update
The ID of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.vpu_position IS '@omit create,update
The vpu_position of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.error_message IS '@omit create,update
The error_message of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.error_code IS '@omit create,update
The error_code of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.time IS '@omit create,update
The time of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.created_at IS '@omit create,update
The created_at of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.updated_at IS '@omit create,update
The updated_at of bag_monitoring assigned by the database';
COMMENT ON COLUMN tickets.bag_monitoring.vehicle_name IS '@omit create,update
The vehicle_name of bag_monitoring assigned by the bag_monitoring';