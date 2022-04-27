package model

type Humans struct {
	Id       int `gorm:"autoIncrement"`
	Dna      string
	IsMutant bool
}
