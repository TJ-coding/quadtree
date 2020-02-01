package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
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


func main() {
	//recieve get request
	http.HandleFunc("/get_image", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "GET" {
			fileName := r.URL.Query().Get("ImgIme")
			if fileName != "" {
				fileList := getFilesFromDir("./static/" + fileName)
				fmt.Fprint(w, "{\"url\":\"http://35.188.44.123/get_image?Img_id=2/"+fileName+"\", \"num_of_files\":"+strconv.Itoa(len(fileList))+"}")

			} else {
				fmt.Fprintf(w, "Get parameter could not be read")
			}
		}
	})

	//serve static file
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)
	http.ListenAndServe(":80", nil)
}
