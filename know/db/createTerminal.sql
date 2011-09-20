DROP TABLE IF EXISTS know.terminal; 
CREATE TABLE know.terminal
(
   terminal_id serial PRIMARY KEY, 
   terminal_number TEXT NOT NULL UNIQUE,
   terminal_note TEXT NOT NULL,
   terminal_date DATE DEFAULT NOW(),
   terminal_closed boolean DEFAULT FALSE
);

GRANT ALL ON know.terminal TO xtrole;
GRANT ALL ON know.terminal_terminal_id_seq TO GROUP xtrole;

COMMENT ON TABLE know.terminal IS 'This table holds a list of cash register terminals defined for the know package in xTuple ERP';
COMMENT ON COLUMN know.terminal.terminal_id IS 'Terminal internal id and primary key';
COMMENT ON COLUMN know.terminal.terminal_number IS 'A human-readable short name for this cash register terminal, which must be unique for this database. If one database is shared by multiple stores, terminal numbers could include a prefix or suffix that distinguishes between those different stores.';
