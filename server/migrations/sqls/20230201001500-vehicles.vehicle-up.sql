/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS vehicles.vehicle (
    id BIGSERIAL,
    device_id VARCHAR(255) NOT NULL,
    name varchar(255) NOT NULL,
    ip VARCHAR(20),
	decommissioned BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT uq_vehicle_name_device_id 
        UNIQUE (name, device_id)
);

CREATE INDEX IF NOT EXISTS idx_vehicles_vehicles_id
    ON vehicles.vehicle(id);

COMMENT ON TABLE vehicles.vehicle IS '@omit delete
This is the vehicles table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN vehicles.vehicle.id IS '@omit create,update
The ID of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.vehicle.device_id IS '@omit create,update
The device_idD of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.vehicle.name IS '@omit create,update
The name of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.vehicle.created_at IS '@omit create,update
The date of vehicle was added to the db';
COMMENT ON COLUMN vehicles.vehicle.ip IS '@omit create,update
The ip of vehicle was added to the db';
COMMENT ON COLUMN vehicles.vehicle.decommissioned IS '@omit create,update
The decommissioned flag of vehicle was added to the db';