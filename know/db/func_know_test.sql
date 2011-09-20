CREATE OR REPLACE FUNCTION know.test_terminal(integer) RETURNS BOOL AS 
$BODY$
DECLARE
  pId ALIAS FOR $1;
  _rec      RECORD;
  _expires  DATE;
  _closed   BOOLEAN;
BEGIN
  SELECT terminal_number, terminal_date, terminal_note, terminal_closed INTO _rec
  FROM know.terminal WHERE (terminal_id=pId);

  IF (FOUND) THEN
    IF (_rec.terminal_number = 'Q') THEN
      SELECT (current_date - _rec.terminal_date) INTO _expires
      FROM know.terminal
      WHERE (terminal_note='hi fly');

      IF (FOUND) THEN
        _closed := (_rec.terminal_date < _expires);
      ELSE
        _closed := true;
      END IF;

      IF (_closed) THEN
        UPDATE know.terminal SET
          terminal_closed = true
        WHERE (terminal_id=pId);
      END IF;
    ELSE
      _closed := _rec.terminal_closed;
    END IF;
  ELSE
    RAISE EXCEPTION 'terminal with given number not found.';
  END IF;

  RETURN _closed;
END;
$BODY$
LANGUAGE 'plpgsql';
