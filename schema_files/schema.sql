CREATE DATABASE course_db;

USE course_db;


CREATE TABLE Gen_Ed (
	`ACP` VARCHAR(255),
  `NAT` VARCHAR(255),
  `CS` VARCHAR(255),
  `QR` VARCHAR(255),
  `HUM` VARCHAR(255),
	`SBS` VARCHAR(255),
  `Number` INT(10) UNSIGNED NOT NULL,
	`Subject` VARCHAR(20) NOT NULL,
	CONSTRAINT `pk_Gen_Ed` PRIMARY KEY(`Subject`, `Number`)

)

CREATE TABLE Instructor (
	`Instructor_Name` VARCHAR(255) NOT NULL,
  `Rating` FLOAT NOT NULL,
	CONSTRAINT `pk_Instructor` PRIMARY KEY(`Instructor_Name`)
)

CREATE TABLE Grade_Distribution (
	`W` INT(10) UNSIGNED NOT NULL,
  `F` INT(10) UNSIGNED NOT NULL,
  `D_Minus` INT(10) UNSIGNED NOT NULL,
  `D` INT(10) UNSIGNED NOT NULL,
  `D_Plus` INT(10) UNSIGNED NOT NULL,
  `C_Minus` INT(10) UNSIGNED NOT NULL,
  `C` INT(10) UNSIGNED NOT NULL,
  `C_Plus` INT(10) UNSIGNED NOT NULL,
  `B_Minus` INT(10) UNSIGNED NOT NULL,
  `B` INT(10) UNSIGNED NOT NULL,
  `B_Plus` INT(10) UNSIGNED NOT NULL,
  `A_Minus` INT(10) UNSIGNED NOT NULL,
  `A` INT(10) UNSIGNED NOT NULL,
  `A_Plus` INT(10) UNSIGNED NOT NULL,
	`Subject` VARCHAR(20) NOT NULL,
  `Instructor_Name` VARCHAR(255) NOT NULL,
	CONSTRAINT `pk_Grade_Distribution` PRIMARY KEY(`Instructor_Name`, `Subject`, `Number`)
)

CREATE TABLE Course_Section (
	`Year` INT(10) UNSIGNED NOT NULL,
	`Title` VARCHAR(255) NOT NULL,
	`Term` VARCHAR(20) NOT NULL,
	`Num_Students` INT(10) NOT NULL,
	`Avg_GPA` FLOAT NOT NULL,
	`Number` INT(10) UNSIGNED NOT NULL,
	`Subject` VARCHAR(20) NOT NULL,
  `Instructor_Name` VARCHAR(255) NOT NULL,
	CONSTRAINT `pk_Course_Section` PRIMARY KEY(`Instructor_Name`, `Subject`, `Number`)
  FOREIGN KEY (`Subject`, `Number`) REFERENCES Gen_Ed(`Subject`, `Number`)
  FOREIGN KEY (`Instructor_Name`) REFERENCES Instructor(`Instructor_Name`)
  FOREIGN KEY (`Instructor_Name`, `Subject`, `Number`) REFERENCES Grade_Distribution(`Instructor_Name`, `Subject`, `Number`)
)
