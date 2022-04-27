package service

func IsMutant(dna []string) bool {
	return findDnaInHorizontal(dna)
}

func findDnaInHorizontal(dna []string) bool {
	mutantGenfinded := 0

	for i := 0; i < len(dna); i++ {
		repeatedLetter := 0
		for j := 0; j < len(dna)-1; j++ {
			checkGen(dna[i][j:j+1], dna[i][j+1:j+2], &repeatedLetter, &mutantGenfinded, &j)
			if mutantGenfinded >= 2 {
				return true
			}
		}
	}

	return findDnaVertical(dna, mutantGenfinded)
}

func findDnaVertical(dna []string, mutantGenfinded int) bool {
	for i := 0; i < len(dna); i++ {
		repeatedLetter := 0
		for j := 0; j < len(dna)-1; j++ {
			checkGen(dna[j][i:i+1], dna[j+1][i:i+1], &repeatedLetter, &mutantGenfinded, &j)
			if mutantGenfinded >= 2 {
				return true
			}
		}
	}
	return findDnaOblique(dna, mutantGenfinded)
}

func findDnaOblique(dna []string, mutantGenfinded int) bool {
	for i := 0; i < len(dna)-3; i++ {
		for j := 0; j < len(dna)-3; j++ {
			if i == 0 || j == 0 {
				repeatedLetter := 0
				for k := 0; k < len(dna)-Abs(i-j)-1; k++ {
					checkGen(dna[i+k][j+k:j+k+1], dna[i+k+1][j+k+1:j+k+2], &repeatedLetter, &mutantGenfinded, &k)
					if mutantGenfinded >= 2 {
						return true
					}
				}
			}
		}
	}
	println(mutantGenfinded)

	return findDnaObliqueOpposite(dna, mutantGenfinded)
}

func findDnaObliqueOpposite(dna []string, mutantGenfinded int) bool {

	for i := 0; i < len(dna)-3; i++ {
		for j := 3; j < len(dna); j++ {
			if i == 0 || j == len(dna)-1 {
				repeatedLetter := 0
				for k := 0; k < Abs(i-j); k++ {
					checkGen(dna[i+k][j-k:j-k+1], dna[i+k+1][j-k-1:j-k], &repeatedLetter, &mutantGenfinded, &k)
					if mutantGenfinded >= 2 {
						return true
					}
				}
			}
		}
	}

	return false
}

func checkGen(currentWord string, nextWord string, repeatedLetter *int, mutantGenfinded *int, count *int) {
	if currentWord == nextWord {
		*repeatedLetter++
		if *repeatedLetter == 3 {
			*mutantGenfinded++
			*count++
			*repeatedLetter = 0
		}
	} else {
		*repeatedLetter = 0
	}
}

func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
