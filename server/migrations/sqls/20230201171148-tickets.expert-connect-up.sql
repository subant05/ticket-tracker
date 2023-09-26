/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tickets.expert_connect (
      id BIGSERIAL,
      vehicle_id BIGINT,
      title varchar(255),
      description text,
      product varchar(255),
      machine_hours varchar(255),
      serial_number varchar(255),
      misc varchar(255),
      resolution text,
      advisor_id BIGINT,
      team_id BIGINT,
      contact_id BIGINT,
      bundle INT DEFAULT 0,
      ec_id varchar(100),
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      PRIMARY KEY(id),
      CONSTRAINT fk_vehicle
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicle(id),
      CONSTRAINT fk_team
        FOREIGN KEY (team_id)
        REFERENCES personnel.expert_connect_teams(id),
      CONSTRAINT fk_advisor
        FOREIGN KEY (advisor_id)
        REFERENCES personnel.expert_connect_advisors(id),
      CONSTRAINT fk_contact
        FOREIGN KEY (contact_id)
        REFERENCES personnel.expert_connect_contacts(id),
      CONSTRAINT uq_ec_id
        UNIQUE (ec_id)
);

CREATE INDEX IF NOT EXISTS idx_tickets_expert_connect
    ON  tickets.expert_connect(id);

COMMENT ON TABLE tickets.expert_connect IS '@omit delete
This is the expert_connect table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN tickets.expert_connect.id IS '@omit create,update
The ID of expert_connect assigned by the database';
COMMENT ON COLUMN tickets.expert_connect.vehicle_id IS '@omit create,update
The vehicle_id of expert_connect assigned by the database';
COMMENT ON COLUMN tickets.expert_connect.title IS '@omit create,update
The title of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.description IS '@omit create,update
The description of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.product IS '@omit create,update
The product of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.machine_hours IS '@omit create,update
The machine_hours of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.serial_number IS '@omit create,update
The serial_number of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.misc IS '@omit create,update
The misc of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.resolution IS '@omit create,update
The resolution of expert_connect assigned by the expert connect';
COMMENT ON COLUMN tickets.expert_connect.advisor_id IS '@omit create,update
The advisor_id of expert_connect assigned by the expert connect with database advisor table';
COMMENT ON COLUMN tickets.expert_connect.team_id IS '@omit create,update
The team_id of expert_connect assigned by the expert connect with database advisor table';
COMMENT ON COLUMN tickets.expert_connect.contact_id IS '@omit create,update
The contact_id of expert_connect assigned by the expert connect with database advisor table';
COMMENT ON COLUMN tickets.expert_connect.created_at IS '@omit create,update
The created_at of formamt assigned by the database';
COMMENT ON COLUMN tickets.expert_connect.updated_at IS '@omit create,update
The updated_at of formamt assigned by the database';
COMMENT ON COLUMN tickets.expert_connect.bundle IS '@omit create,update
The bundle of formamt assigned by the database';
COMMENT ON COLUMN tickets.expert_connect.ec_id IS '@omit create,update
The ec_id of formant assigned by the expert connect';