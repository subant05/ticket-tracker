/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.formant (
  id BIGSERIAL,
  type varchar(25), 
  vehicle_id BIGINT NOT NULL,
  formant_id varchar(255) NOT NULL,
  device_id varchar(50) NOT NULL,
  message text NOT NULL,
  severity varchar(100) NOT NULL,
  stream_name varchar(255) NOT NULL,
  stream_type varchar(25) NOT NULL,
  tags text NOT NULL,
  value varchar(255),
  time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  url text NOT NULL,
  bundle INT DEFAULT 0,
  vadc_diagnostics text DEFAULT '{}',
  device_name varchar(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  active BOOLEAN NOT NULL DEfAULT TRUE,
  PRIMARY KEY(id),
  CONSTRAINT fk_vehicle
    FOREIGN KEY (vehicle_id)
    REFERENCES vehicles.vehicle(id)
);


CREATE INDEX IF NOT EXISTS idx_tickets_formant_id ON tickets.formant(id);
CREATE INDEX IF NOT EXISTS idx_tickets_formant_tags ON tickets.formant(tags);
CREATE INDEX IF NOT EXISTS idx_tickets_formant_vehicle_id ON tickets.formant(vehicle_id);
CREATE INDEX IF NOT EXISTS idx_tickets_formant_type ON tickets.formant(type);
CREATE INDEX IF NOT EXISTS idx_tickets_formant_severity ON tickets.formant(severity);
CREATE INDEX IF NOT EXISTS idx_tickets_formant_stream_name ON tickets.formant(stream_name);
CREATE INDEX IF NOT EXISTS idx_tickets_formant_stream_name ON tickets.formant(stream_name);

COMMENT ON TABLE tickets.formant IS '@omit delete
This is the formant table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.formant.id IS '@omit create,update
The ID of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.type IS '@omit create,update
The type of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.vehicle_id IS '@omit create,update
The vehicle_id of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.formant_id IS '@omit create,update
The typformant_ide_id of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.device_id IS '@omit create,update
The device_id of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.message IS '@omit create,update
The message of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.severity IS '@omit create,update
The severity of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.stream_name IS '@omit create,update
The stream_name of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.stream_type IS '@omit create,update
The stream_type of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.tags IS '@omit create,update
The tags of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.value IS '@omit create,update
The value of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.time IS '@omit create,update
The time of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.url IS '@omit create,update
The url of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.created_at IS '@omit create,update
The created_at of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.updated_at IS '@omit create,update
The updated_at of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.bundle IS '@omit create,update
The bundle of formant assigned by the database';
COMMENT ON COLUMN tickets.formant.vadc_diagnostics IS '@omit create,update
The vadc_diagnostics of formant assigned by the formant';
COMMENT ON COLUMN tickets.formant.device_name IS '@omit create,update
The device_name of formant assigned by the formant';