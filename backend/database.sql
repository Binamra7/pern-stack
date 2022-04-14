CREATE DATABASE firstpern;

CREATE TABLE todo(
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    descriptions VARCHAR(255) 
);