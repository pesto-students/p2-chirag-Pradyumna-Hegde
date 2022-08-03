-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Warehouse
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Warehouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Warehouse` ;
USE `Warehouse` ;

-- -----------------------------------------------------
-- Table `Warehouse`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`cities` (
  `city_id` INT NOT NULL,
  `city` CHAR(20) NOT NULL,
  `state` CHAR(20) NOT NULL,
  PRIMARY KEY (`city_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`warehouses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`warehouses` (
  `warehouse_id` INT NOT NULL,
  `city_id` INT NOT NULL,
  `name` CHAR(30) NOT NULL,
  `location` CHAR(20) NOT NULL,
  `extraContext` JSON NULL,
  PRIMARY KEY (`warehouse_id`),
  INDEX `fk_warehouses_cities1_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_warehouses_cities1`
    FOREIGN KEY (`city_id`)
    REFERENCES `Warehouse`.`cities` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`stores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`stores` (
  `store_id` INT NOT NULL,
  `warehouse_id` INT NOT NULL,
  `name` CHAR(20) NOT NULL,
  `location` CHAR(20) NOT NULL,
  PRIMARY KEY (`store_id`),
  INDEX `fk_stores_warehouses1_idx` (`warehouse_id` ASC) VISIBLE,
  CONSTRAINT `fk_stores_warehouses1`
    FOREIGN KEY (`warehouse_id`)
    REFERENCES `Warehouse`.`warehouses` (`warehouse_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`customers` (
  `customer_id` INT NOT NULL,
  `name` CHAR(50) NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  `city` CHAR(20) NOT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`orders` (
  `order_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  `date` DATE NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_orders_customers1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_customers1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `Warehouse`.`customers` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`items` (
  `item_id` INT NOT NULL,
  `description` TEXT(255) NULL,
  `weight` DECIMAL(5,2) NOT NULL,
  `cost` DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (`item_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`stores_has_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`stores_has_items` (
  `store_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`store_id`, `item_id`),
  INDEX `fk_stores_has_items_items1_idx` (`item_id` ASC) VISIBLE,
  INDEX `fk_stores_has_items_stores1_idx` (`store_id` ASC) VISIBLE,
  CONSTRAINT `fk_stores_has_items_stores1`
    FOREIGN KEY (`store_id`)
    REFERENCES `Warehouse`.`stores` (`store_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_stores_has_items_items1`
    FOREIGN KEY (`item_id`)
    REFERENCES `Warehouse`.`items` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Warehouse`.`orders_has_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Warehouse`.`orders_has_items` (
  `order_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`order_id`, `item_id`),
  INDEX `fk_orders_has_items_items1_idx` (`item_id` ASC) VISIBLE,
  INDEX `fk_orders_has_items_orders1_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_has_items_orders1`
    FOREIGN KEY (`order_id`)
    REFERENCES `Warehouse`.`orders` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_items_items1`
    FOREIGN KEY (`item_id`)
    REFERENCES `Warehouse`.`items` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
