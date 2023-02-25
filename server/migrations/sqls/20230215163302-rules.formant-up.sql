/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS rules.formant (
  id BIGSERIAL,
  stream_name VARCHAR(255) NOT NULL,
  stream_type VARCHAR(25) NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT uq_formant_rule
    UNIQUE (stream_name, stream_type)
);

CREATE INDEX IF NOT EXISTS idx_rules_formant_id ON rules.formant(id);

COMMENT ON TABLE "rules"."formant" IS E'@name fornant_rules';
COMMENT ON TABLE rules.formant IS '@omit delete
This id the formant table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN rules.formant.id IS '@omit create,update
The ID of formant assigned by the database';
COMMENT ON COLUMN rules.formant.stream_name IS '@omit create,update
The stream_name of formant assigned by the database';
COMMENT ON COLUMN rules.formant.stream_type IS '@omit create,update
The stream_type of formant assigned by the database';


CREATE TABLE IF NOT EXISTS rules.formant_conditions (
    id BIGSERIAL,
    rule_id BIGINT NOT NULL,
    condition VARCHAR(255) NOT NULL,
    operator VARCHAR(5) NOT NULL,
    value VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_formant_rule_id
      FOREIGN KEY (rule_id)
      REFERENCES rules.formant (id),
    CONSTRAINT uq_fomant_condition
      UNIQUE (rule_id, condition, value)

);

CREATE INDEX IF NOT EXISTS idx_rules_formant_conditions_id ON rules.formant_conditions(id);

COMMENT ON TABLE "rules"."formant_conditions" IS E'@name fornant_rules_conditions';
COMMENT ON TABLE rules.formant_conditions IS '@omit delete
This id the formant_conditions table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN rules.formant_conditions.id IS '@omit create,update
The ID of formant_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_conditions.condition IS '@omit create,update
The condition of formant_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_conditions.operator IS '@omit create,update
The operator of formant_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_conditions.value IS '@omit create,update
The value of formant_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_conditions.rule_id IS '@omit create,update
The rule_id of formant_conditions assigned by the database';

CREATE TABLE IF NOT EXISTS rules.formant_formatting (
      id BIGSERIAL,
      rule_id BIGINT NOT NULL,
      key VARCHAR(255) NOT NULL,
      value VARCHAR(255) NOT NULL,
      PRIMARY KEY(id),
      CONSTRAINT fk_formant_rule_id
        FOREIGN KEY (rule_id)
        REFERENCES rules.formant (id),
      CONSTRAINT uq_fomant_formatting
        UNIQUE (rule_id, key, value)
);

CREATE INDEX IF NOT EXISTS idx_rules_formant_formatting_id ON rules.formant_formatting(id);

COMMENT ON TABLE "rules"."formant_formatting" IS E'@name fornant_rules_formatting';
COMMENT ON TABLE rules.formant_formatting IS '@omit delete
This id the formant_formatting table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN rules.formant_formatting.id IS '@omit create,update
The ID of formant_formatting assigned by the database';
COMMENT ON COLUMN rules.formant_formatting.key IS '@omit create,update
The condition of formant_formatting assigned by the database';
COMMENT ON COLUMN rules.formant_formatting.rule_id IS '@omit create,update
The rule_id of formant_formatting assigned by the database';
COMMENT ON COLUMN rules.formant_formatting.value IS '@omit create,update
The value of formant_formatting assigned by the database';

CREATE TABLE IF NOT EXISTS rules.formant_associated_streams (
      id BIGSERIAL,
      rule_id BIGINT NOT NULL,
      stream_name VARCHAR(255),
      PRIMARY KEY(id),
      CONSTRAINT fk_formant_rule_id
        FOREIGN KEY (rule_id)
        REFERENCES rules.formant(id),
      CONSTRAINT uq_formant_assoc_streams
        UNIQUE (rule_id, stream_name)
);

CREATE INDEX IF NOT EXISTS idx_rules_formant_associated_streams_id ON rules.formant_associated_streams(id);

COMMENT ON TABLE "rules"."formant_associated_streams" IS E'@name formant_associated_streams';
COMMENT ON TABLE rules.formant_associated_streams IS '@omit delete
This id the formant_associated_streams table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN rules.formant_associated_streams.id IS '@omit create,update
The ID of formant_associated_streams assigned by the database';
COMMENT ON COLUMN rules.formant_associated_streams.rule_id IS '@omit create,update
The rule_id of formant_associated_streams assigned by the database';
COMMENT ON COLUMN rules.formant_associated_streams.stream_name IS '@omit create,update
The stream_name of formant_associated_streams assigned by the database';


CREATE TABLE IF NOT EXISTS rules.formant_associated_stream_conditions (
    id BIGSERIAL,
    assoc_id BIGINT NOT NULL,
    condition VARCHAR(255) NOT NULL,
    operator VARCHAR(5) NOT NULL,
    value VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_formant_associated_streams_id
      FOREIGN KEY (assoc_id)
      REFERENCES rules.formant_associated_streams(id),
    CONSTRAINT uq_formant_associated_stream_conditions
      UNIQUE (assoc_id, condition, value)

);

CREATE INDEX IF NOT EXISTS idx_rules_formant_associated_stream_conditions_id ON rules.formant_associated_stream_conditions(id);

COMMENT ON TABLE "rules"."formant_associated_stream_conditions" IS E'@name formant_assoc_stream_conditions';
COMMENT ON TABLE rules.formant_associated_stream_conditions IS '@omit delete
This id the formant_associated_stream_conditions table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN rules.formant_associated_stream_conditions.id IS '@omit create,update
The ID of formant_associated_stream_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_conditions.condition IS '@omit create,update
The condition of formant_associated_stream_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_conditions.operator IS '@omit create,update
The operator of formant_associated_stream_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_conditions.value IS '@omit create,update
The value of formant_associated_stream_conditions assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_conditions.assoc_id IS '@omit create,update
The assoc_id of formant_associated_stream_conditions assigned by the database';


CREATE TABLE IF NOT EXISTS rules.formant_associated_stream_formatting (
      id BIGSERIAL,
      associated_stream_id BIGINT NOT NULL,
      key VARCHAR(255) NOT NULL,
      value VARCHAR(255) NOT NULL,
      PRIMARY KEY(id),
      CONSTRAINT fk_associated_stream_id
        FOREIGN KEY (associated_stream_id)
        REFERENCES rules.formant_associated_streams(id),
      CONSTRAINT uq_formant_associated_stream_formatting
        UNIQUE (associated_stream_id, key, value)
);

CREATE INDEX IF NOT EXISTS idx_rules_formant_associated_stream_formatting_id ON rules.formant_associated_stream_formatting(id);

COMMENT ON TABLE "rules"."formant_associated_stream_formatting" IS E'@name formant_associated_stream_formatting';
COMMENT ON TABLE rules.formant_associated_stream_formatting IS '@omit delete
This id the formant_associated_stream_formatting table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN rules.formant_associated_stream_formatting.id IS '@omit create,update
The ID of formant_associated_stream_formatting assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_formatting.associated_stream_id IS '@omit create,update
The associated_stream_id of formant_associated_stream_formatting assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_formatting.key IS '@omit create,update
The key of formant_associated_stream_formatting assigned by the database';
COMMENT ON COLUMN rules.formant_associated_stream_formatting.value IS '@omit create,update
The value of formant_associated_stream_formatting assigned by the database';

