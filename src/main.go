package main

import (
	"github.com/adchavesm/ml-interview/src/router"
	"github.com/adchavesm/ml-interview/src/service"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	service.MigrateDB()
	router.Run()
}
