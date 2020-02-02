package main

import (
	"fmt"
	"html"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
)

type fileNamePair struct {
	ID       int
	FileName string
}

func getFilesFromDir(dirPath string) []string {
	files, _ := ioutil.ReadDir(dirPath)
	fileList := make([]string, 0)
	for _, file := range files {
		fileList = append(fileList, file.Name())
	}
	return fileList
}

func fileExists(filename string) bool {
	info, err := os.Stat("./static/" + filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func main() {
	//recieve get request
	http.HandleFunc("/get_image", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "GET" {
			fileName := r.URL.Query().Get("ImgName")
			if fileName != "" {
				fileList := getFilesFromDir("./static/" + fileName)
				fmt.Fprint(w, "{ \"num_of_files\":"+strconv.Itoa(len(fileList))+"}")

			} else {
				fmt.Fprintf(w, "Get parameter could not be read")
			}

		}
	})

	//new router
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if fileExists(html.EscapeString(r.URL.Path)) {
			http.ServeFile(w, r, "./static/"+r.URL.Path)
		} else {
			http.ServeFile(w, r, "./static/quadran/index.html")
		}

	})
	/*
		fs := http.FileServer(http.Dir("static"))
		http.Handle("/", fs)
	*/
	http.ListenAndServe(":80", nil)
}
