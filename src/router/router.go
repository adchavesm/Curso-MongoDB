package router

import (
	"github.com/adchavesm/ml-interview/src/controller"
	"github.com/gin-gonic/gin"
)

func Run() {
	r := gin.Default()
	r.POST("/mutant", controller.InsertAndCheckIsMutant)
	r.GET("/stats", controller.GetStats)
	r.Run()
}
