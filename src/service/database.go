package service

import (
	"fmt"
	"github.com/adchavesm/ml-interview/src/model"
	"github.com/adchavesm/ml-interview/src/utils"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"strconv"
	"strings"
	"sync"
)

var (
	db    *gorm.DB
	mutex sync.Mutex
)

func init() {
	connectionDB()
}
func connectionDB() {
	var err error
	db, err = gorm.Open(mysql.Open(getDBCredentials()), &gorm.Config{})
	if err != nil {
		panic(err.Error())
	}
}

func MigrateDB() {
	db.AutoMigrate(&model.Humans{})
}

func GetMutans() []model.Humans {
	var mutants []model.Humans
	db.Where(&model.Humans{IsMutant: true}).Find(&mutants)
	return mutants
}

func GetHumans() []model.Humans {
	var humans []model.Humans
	db.Where(&model.Humans{}).Find(&humans)
	return humans
}

func InsertOrganism(dna []string, isMutant bool) {
	db.Create(&model.Humans{Dna: castDnaToDBFormat(dna), IsMutant: isMutant})
}

func DnaExist(dna []string) bool {
	var organisms []model.Humans
	db.Where(&model.Humans{Dna: castDnaToDBFormat(dna)}).Find(&organisms)
	return len(organisms) != 0
}

func getDBCredentials() string {
	dbName := utils.GetEnvOrDefault("DB_NAME", "xmen")
	dbUser := utils.GetEnvOrDefault("DB_USER", "root")
	dbPass := utils.GetEnvOrDefault("DB_PASSWORD", "password")
	dbHost := utils.GetEnvOrDefault("DB_HOST", "127.0.0.1")
	dbPort := utils.GetEnvOrDefault("DB_PORT", "3306")
	dbPortInt, _ := strconv.Atoi(dbPort)
	return fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", dbUser, dbPass, dbHost, dbPortInt, dbName)
}

func castDnaToDBFormat(dna []string) string {
	return strings.Join(dna, " ")
}
