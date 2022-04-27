package controller

import (
	"github.com/adchavesm/ml-interview/src/model"
	"github.com/adchavesm/ml-interview/src/service"
	"github.com/gin-gonic/gin"
)

func GetStats(c *gin.Context) {

	stats := service.GetStats()

	c.JSON(200, gin.H{
		"count_mutant_dna": stats.MutantsCount,
		"count_human_dna":  stats.HumansCount,
		"ratio":            stats.MutantsRatio,
	})
}

func InsertAndCheckIsMutant(c *gin.Context) {
	isMutantDto := model.IsMutantDto{}
	if err := c.Bind(&isMutantDto); err != nil {
		c.JSON(500, err)
		return
	}

	if service.InsertAndCheckIsMutant(isMutantDto.Dna) {
		c.JSON(200, gin.H{})
	} else {
		c.JSON(403, gin.H{})
	}
}
