package service

import "testing"

func TestIsMutant(t *testing.T) {
	dna := []string{
		"AAAAGACA",
		"AACCAGTT",
		"AAAAGTGT",
		"AGAAGGTG",
		"ATCAGAAA",
		"ACATTGTT",
		"ACACCGGC",
		"ACACTGCG"}

	res := IsMutant(dna)
	if res {
		t.Log()
	} else {
		t.Error("Error")
		t.Fail()
	}
}

func TestMutantWithVerticalChains(t *testing.T) {
	dna := []string{
		"ATGCGC",
		"ATGTGA",
		"TTATCA",
		"ATAAGA",
		"CCGCTA",
		"ATAATG"}

	res := IsMutant(dna)
	if res {
		t.Log()
	} else {
		t.Error("Error")
		t.Fail()
	}
}

func TestMutantWithObliqueChains(t *testing.T) {
	dna := []string{
		"ATGCGC",
		"AAGTCA",
		"TTACCT",
		"ATCAGC",
		"CCGCTA",
		"ATAATG"}

	res := IsMutant(dna)
	if res {
		t.Log()
	} else {
		t.Error("Error")
		t.Fail()
	}
}
