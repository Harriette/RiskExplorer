INSERT INTO companies (name)
  VALUES
    ('Choose Company'),
    ('UK Club'),
    ('TM');

INSERT INTO departments (name)
  VALUES
    ('Choose Department'),
    ('Claims'),
    ('Underwriting'),
    ('Management'),
    ('Finance'),
    ('Loss Prevention'),
    ('Actuarial');

INSERT INTO profiles (first_name, last_name, company_ID, department_ID)
  VALUES
    ('Nigel', 'De Silva', 2, 4);

INSERT INTO users (user_name, password_hash, profile_ID)
  VALUES
    ('desilvan', '$2y$10$FpcuOwEkqoYJAm3AE/PepuXjl5vvEbFhrECvrcxwzaGtm1zib1dom', 1);

INSERT INTO processes (name)
  VALUES
    ('Choose Process'),
    ('Planning'),
    ('Governance'),
    ('Resourcing'),
    ('Systems/processes'),
    ('Data'),
    ('Work'),
    ('Communication');

INSERT INTO risks (id, name, description, loss, risk_level, company_ID, department_ID, process_ID)
  VALUES
    ('P1','Premium', 'Premium different to expectations.', 1, 1, 2, 1, 1),
    ('P2','Premium volumes', 'Premium volume different to expectations.', 1, 2, 2, 1, 1),
    ('P3','Premium adequacy', 'Premium adequacy different to expectations.', 1, 2, 2, 1, 1),
    ('C1','Claims', 'Claims different to expectations.', 1, 1, 2, 1, 1);

INSERT INTO risklinks (riskfrom_ID, riskto_ID)
  VALUES
    (2, 1),
    (2, 1);
