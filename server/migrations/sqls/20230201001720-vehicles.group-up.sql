CREATE TABLE IF NOT EXISTS vehicles.group (
    id BIGSERIAL,
    name VARCHAR(100) UNIQUE NOT NULL,
    group_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    organization_id VARCHAR(50) NOT NULL,
    tag_key VARCHAR(255) NOT NULL,
    tag_value VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    enabled BOOLEAN NOT NULL DEFAULT true,
    PRIMARY KEY(id),
    CONSTRAINT uq_vehicle_group_name_group_id 
        UNIQUE (name, group_id)
);

CREATE INDEX IF NOT EXISTS idx_vehicles_group ON vehicles.group(id);


COMMENT ON TABLE vehicles.group IS '@omit delete
This is the vehicles table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN vehicles.group.id IS '@omit create,update
The ID of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.group.group_id IS '@omit create,update
The group_id of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.group.created_at IS '@omit create,update
The created_at of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.group.updated_at IS '@omit create,update
The updated_at of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.group.organization_id IS '@omit create,update
The organization_id of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.group.tag_key IS '@omit create,update
The tag_key of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.group.tag_value IS '@omit create,update
The tag_value of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.group.active IS '@omit create,update
The active of vehicle assigned by the formant';
COMMENT ON COLUMN vehicles.group.enabled IS '@omit create,update
The enabled of vehicle assigned by the formant';