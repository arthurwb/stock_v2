/*Table Creation*/
CREATE TABLE tOptions (
    optionId INT AUTO_INCREMENT PRIMARY KEY,
    optionName VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE tHistoricalPrices (
    hpId INT AUTO_INCREMENT PRIMARY KEY,
    optionId INT,
    historicalPrice DECIMAL(10, 2) NOT NULL,
    dateRecorded DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (optionId) REFERENCES tOptions(optionId) ON DELETE CASCADE
);

CREATE TABLE tUsers (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    wallet DECIMAL(10, 2) NOT NULL
);

CREATE TABLE tCarrots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    optionId INT,
    purchasePrice DECIMAL NOT NULL,
    datePurchased DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES tUsers(userId) ON DELETE CASCADE,
    FOREIGN KEY (optionId) REFERENCES tOptions(optionId) ON DELETE CASCADE
);

/*Init Option Population*/
INSERT INTO tOptions (optionName, price) VALUES ('google', 500);
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (1, 504.00, '2024-09-18 09:00:00');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (1, 503.00, '2024-09-18 09:00:05');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (1, 502.00, '2024-09-18 09:00:10');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (1, 501.00, '2024-09-18 09:00:15');

INSERT INTO tOptions (optionName, price) VALUES ('microsoft', 500);
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 496.00, '2024-09-18 09:00:00');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 497.00, '2024-09-18 09:00:05');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 498.00, '2024-09-18 09:00:10');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 499.00, '2024-09-18 09:00:15');

INSERT INTO tOptions (optionName, price) VALUES ('amazon', 500);
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 100.00, '2024-09-18 09:00:00');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 200.00, '2024-09-18 09:00:05');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 300.00, '2024-09-18 09:00:10');
INSERT INTO tHistoricalPrices (optionId, historicalPrice, dateRecorded) VALUES (2, 400.00, '2024-09-18 09:00:15');

/*Init User Population*/
INSERT INTO tUsers (username, password, wallet) VALUES ('admin', 'admin123', 100000.00);
INSERT INTO tCarrots (userId, optionId, purchasePrice, datePurchased) VALUES (1, 1, 300.00, '2024-09-18 09:00:00');
INSERT INTO tCarrots (userId, optionId, purchasePrice, datePurchased) VALUES (1, 2, 200.00, '2024-09-17 10:00:00');
INSERT INTO tCarrots (userId, optionId, purchasePrice, datePurchased) VALUES (1, 3, 800.00, '2024-09-16 11:00:00');

INSERT INTO tUsers (username, password, wallet)VALUES ('sample', 'password', 0.00);
INSERT INTO tCarrots (userId, optionId, purchasePrice, datePurchased) VALUES (2, 1, 100.00, '2024-09-18 07:00:00');