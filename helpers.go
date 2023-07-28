package main

import (
	"log"
	"math/rand"
	"os"
)

// genPostID generates a post ID
func genPostID(length int) (ID string) {
	symbols := "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	for i := 0; i <= length; i++ {
		s := rand.Intn(len(symbols))
		ID += symbols[s : s+1]
	}
	return
}

func makeGallery() (p page) {
	entries, err := os.ReadDir("./public/assets/gallery/")
	if err != nil {
		log.Fatal(err)
	}

	for _, e := range entries {
		p.Gallery = append(p.Gallery, e.Name())
		log.Println(e.Name())
	}
	return
}
