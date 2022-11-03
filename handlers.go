package main

import (
	"fmt"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "home.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func about(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "home.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func mission(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "home.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func gallery(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "home.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
func contact(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "home.tmpl", &page{Title: "Title", Body: "Hello world"})
	if err != nil {
		fmt.Println(err)
	}
}
