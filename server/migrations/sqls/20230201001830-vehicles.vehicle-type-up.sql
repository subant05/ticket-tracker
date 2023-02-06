/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS vehicles.vehicle_type (
    id BIGSERIAL,
    vehicle_id BIGINT NOT NULL,
    type_id BIGINT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_vehicle
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicle(id),
    CONSTRAINT fk_type
        FOREIGN KEY (type_id)
        REFERENCES vehicles.type(id)
);

CREATE INDEX IF NOT EXISTS idx_vehicles_vehicles_type 
    ON vehicles.vehicle_type (id);

COMMENT ON TABLE vehicles.vehicle_type IS '@omit delete
This is the vehicles table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN vehicles.vehicle_type.id IS '@omit create,update
The ID of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_type.vehicle_id IS '@omit create,update
The vehicle_id of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.vehicle_type.type_id IS '@omit create,update
The vehicle_type of vehicle assigned by the database';