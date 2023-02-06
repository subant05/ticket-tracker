/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS vehicles.type (
    id BIGSERIAL,
    type VARCHAR(100) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);

CREATE INDEX IF NOT EXISTS idx_vehicles_type ON vehicles.type(id);

COMMENT ON TABLE vehicles.type IS '@omit delete
This is the vehicles table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN vehicles.type.id IS '@omit create,update
The ID of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.type.type IS '@omit create,update
The device_idD of vehicle assigned by the formant';