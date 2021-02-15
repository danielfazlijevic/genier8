#!/bin/bash

if [[ $1 == create ]]; then
        curl -X POST -H "Content-Type: application/json" -d '{ "tmpl": "woow", "params": {"param1": "value"}, "name": "test" }' localhost:3000/template?email=jokicnikola07@gmail.com
elif [[ $1 == generate ]]; then
    curl -X POST localhost:3000/template/generate > out.pdf
fi
