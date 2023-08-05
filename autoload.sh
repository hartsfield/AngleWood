#!/bin/bash
pkill -9 $1
go build -o $1
servicePort=4420 logFilePath=./logfile.txt ./$1 & 
