-- MusicMatch Database Schema
-- This schema represents the relational database structure for the MusicMatch application.

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Table `genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `genres` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL UNIQUE
);

-- -----------------------------------------------------
-- Table `user_favorite_genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_favorite_genres` (
  `user_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `genre_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `songs` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `artist` VARCHAR(255) NOT NULL,
  `album` VARCHAR(255) NULL,
  `cover_url` VARCHAR(255) NULL,
  `preview_url` VARCHAR(255) NULL
);

-- -----------------------------------------------------
-- Table `song_genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `song_genres` (
  `song_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  PRIMARY KEY (`song_id`, `genre_id`),
  FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `likes` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `song_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (`user_id`, `song_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `matches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `matches` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `user1_id` INT NOT NULL,
  `user2_id` INT NOT NULL,
  `song_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (`user1_id`, `user2_id`, `song_id`),
  FOREIGN KEY (`user1_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `conversations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `conversations` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `match_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`match_id`) REFERENCES `matches` (`id`) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `messages` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `conversation_id` INT NOT NULL,
  `sender_id` INT NOT NULL,
  `text` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`conversation_id`) REFERENCES `conversations` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);


-- -----------------------------------------------------
-- Sample Data Inserts
-- -----------------------------------------------------

INSERT INTO `users` (`username`, `email`, `password`) VALUES
('Elena', 'elena@musicmatch.com', 'hashed_password'),
('Marco', 'marco@musicmatch.com', 'hashed_password');

INSERT INTO `genres` (`name`) VALUES
('Synthwave'),
('Indie'),
('Alternative Rock'),
('Pop');

INSERT INTO `songs` (`title`, `artist`, `album`) VALUES
('After Dark', 'Mr.Kitty', 'Time'),
('Starlight', 'Muse', 'Black Holes and Revelations');

INSERT INTO `song_genres` (`song_id`, `genre_id`) VALUES
(1, 1),
(1, 2),
(2, 3);

INSERT INTO `likes` (`user_id`, `song_id`) VALUES
(1, 1),
(2, 1);

-- This would trigger the creation of a match and a conversation
INSERT INTO `matches` (`user1_id`, `user2_id`, `song_id`) VALUES
(1, 2, 1);

INSERT INTO `conversations` (`match_id`) VALUES
(1);

INSERT INTO `messages` (`conversation_id`, `sender_id`, `text`) VALUES
(1, 1, '¡Hola! También te gusta After Dark, ¡qué genial!'),
(1, 2, '¡Sí! Es una de mis favoritas.');
