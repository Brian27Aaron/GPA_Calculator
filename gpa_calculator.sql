-- Create the subjects table
CREATE TABLE subjects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  grade INT
);

-- Insert the initial subjects
INSERT INTO subjects (name, grade) VALUES
('Operating Systems', NULL),
('Microprocessor and Computer Architecture', NULL),
('Computer Programming', NULL),
('Data Communication and Networking', NULL),
('Multimedia Systems', NULL),
('Analogue Electronics', NULL),
('Instrumentation and Measurements', NULL),
('Engineering Mathematics', NULL),
('Technical Communication Skills', NULL);
