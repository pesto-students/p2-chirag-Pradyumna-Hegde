-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wealth
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wealth
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wealth` ;
USE `wealth` ;

-- -----------------------------------------------------
-- Table `wealth`.`assets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wealth`.`assets` (
  `asset_id` INT NOT NULL AUTO_INCREMENT,
  `name` CHAR(20) NULL,
  PRIMARY KEY (`asset_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wealth`.`amount_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wealth`.`amount_types` (
  `amount_type_id` INT NOT NULL AUTO_INCREMENT,
  `label` CHAR(20) NOT NULL,
  PRIMARY KEY (`amount_type_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wealth`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wealth`.`customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` CHAR(20) NOT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wealth`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wealth`.`transactions` (
  `transaction_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `asset_id` INT NOT NULL,
  `amount_type_id` INT NOT NULL,
  `amout` INT NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`transaction_id`),
  INDEX `fk_transactions_customers_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_transactions_amount_type1_idx` (`amount_type_id` ASC) VISIBLE,
  INDEX `fk_transactions_assets1_idx` (`asset_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_customers`
    FOREIGN KEY (`customer_id`)
    REFERENCES `wealth`.`customers` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_transactions_amount_type1`
    FOREIGN KEY (`amount_type_id`)
    REFERENCES `wealth`.`amount_types` (`amount_type_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_transactions_assets1`
    FOREIGN KEY (`asset_id`)
    REFERENCES `wealth`.`assets` (`asset_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
