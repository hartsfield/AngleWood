package main

import (
	"fmt"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	gal := makeGallery()
	err := templates.ExecuteTemplate(w, "home.tmpl", gal)
	if err != nil {
		fmt.Println(err)
	}
}
func about(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "about.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func mission(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "mission.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func gallery(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "gallery.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func contact(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "contact.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
