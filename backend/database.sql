CREATE TABLE IF NOT EXISTS pokemon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    index_number TEXT NOT NULL,
    main_type VARCHAR(100) NOT NULL,
    minor_type TEXT,
    abilities TEXT,
    character TEXT,
    habitat TEXT,
    description TEXT,
    image_title BYTEA,
    image_main BYTEA,
    height TEXT,
    weight TEXT,
    special_ability TEXT,
    background_gradient TEXT NOT NULL,
    gender VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS pokemon_icons (
    id SERIAL PRIMARY KEY,
    evolution_id INTEGER REFERENCES pokemon(id) ON DELETE CASCADE ON UPDATE CASCADE,
    icon_url BYTEA NOT NULL,
    name TEXT NOT NULL,
    stage_order INTEGER NOT NULL
);