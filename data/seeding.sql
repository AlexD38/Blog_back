BEGIN;

----------------------------------------------------------------

---------------------ENTERPRISES TABLE SEEDING-----------------

----------------------------------------------------------------

INSERT INTO
    enterprises (name, address, description)
VALUES (
        'Nails',
        '9 Avenue du prout',
        'Je fais des ongles !'
    );

COMMIT;