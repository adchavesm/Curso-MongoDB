package service

import (
	"github.com/adchavesm/ml-interview/src/model"
)

func GetStats() model.Stats {

	var stats model.Stats

	stats.HumansCount = len(GetHumans())
	stats.MutantsCount = len(GetMutans())
	if stats.HumansCount != 0 {
		stats.MutantsRatio = float64(stats.MutantsCount) / float64(stats.HumansCount)
	}
	return stats
}

func InsertAndCheckIsMutant(dna []string) bool {
	isMutant := IsMutant(dna)

	if !DnaExist(dna) {
		InsertOrganism(dna, isMutant)
	}

	return isMutant
}
