/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS vehicles.vehicle_group (
    id BIGSERIAL,
    vehicle_id BIGINT NOT NULL,
    group_id BIGINT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uq_vehicle_group_group_vehicle_id
        UNIQUE (vehicle_id),
    CONSTRAINT fk_vehicle
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicle(id),
    CONSTRAINT fk_group
        FOREIGN KEY(group_id)
        REFERENCES vehicles.group(id)
);

CREATE INDEX IF NOT EXISTS idx_vehicles_vehicle_group
    ON vehicles.vehicle_group (id);
    
COMMENT ON TABLE vehicles.vehicle_group IS '@omit delete
This is the vehicles table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN vehicles.vehicle_group.id IS '@omit create,update
The ID of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_group.vehicle_id IS '@omit create,update
The vehicle_id of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_group.group_id IS '@omit create,update
The group_id of vehicle assigned by the database';