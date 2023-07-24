BEGIN;

----------------------------------------------------------------

---------------------ENTERPRISES TABLE SEEDING-----------------

----------------------------------------------------------------

INSERT INTO
    users (mail, password, is_admin)
VALUES (
        'dartiguelongue.alexis@gmail.com',
        'KOMLk',
        true
    );

INSERT INTO
    posts (title, slug, body)
VALUES (
        'Harry Potter and the Philosopher''s Stone',
        '1st book of the serie',
        'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry''s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin'
    ), (
        'Harry Potter and the Chamber of Secrets',
        '2st book of the serie',
        'Harry Potter''s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft And Wizardry for his second year, Harry hears strange whispers echo through empty corridors – and then the attacks start. Students are found as though turned to stone... Dobby''s sinister predictions seem to be coming true.'
    ), (
        'Harry Potter and the Prisoner of Azkaban',
        '3rd book of the serie',
        'When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it''s the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run – and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry''s tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss..'
    );

INSERT INTO tags (name)
VALUES ('Stone'), ('1st Book'), ('Basilic'), ('2d Book'), ('3rd Book'), ('Sewage'), ('4th Book'), ('5th Book'), ('6th Book'), ('Last Book'), ('Azkaban'), ('Goblet'), ('Fire'), ('Phenix'), ('Snape'), (' Half Blood Prince'), ('Deathly Hallows');

INSERT INTO
    posts_has_tags (posts_id, tags_id)
VALUES (1, 1), (1, 2), (2, 2), (2, 3), (3, 5);

COMMIT;