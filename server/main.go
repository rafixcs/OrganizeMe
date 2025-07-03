package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type CreateAccountRequest struct {
	FullName string `json:"fullName"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedMethods: []string{"GET", "POST"},
	}))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello from server!\n"))
	})

	r.Post("/auth", func(w http.ResponseWriter, r *http.Request) {
		var requestBody LoginRequest
		err := json.NewDecoder(r.Body).Decode(&requestBody)
		if err != nil {
			log.Printf(`Decode request error:  %w`, err)
			http.Error(w, "bad format", http.StatusBadRequest)
			return
		}

		log.Printf(`Content Received: %v`, requestBody)
		w.WriteHeader(http.StatusAccepted)
	})

	r.Post("/signup", func(w http.ResponseWriter, r *http.Request) {
		var requestBody CreateAccountRequest
		err := json.NewDecoder(r.Body).Decode(&requestBody)
		if err != nil {
			log.Printf(`Decode request error:  %w`, err)
			http.Error(w, "bad format", http.StatusBadRequest)
			return
		}

		log.Printf(`Content Received: %v`, requestBody)
		w.WriteHeader(http.StatusCreated)
	})

	log.Fatal(http.ListenAndServe(":8080", r))
}
