#!/bin/bash

echo "Running"

if [[ $1 == create ]]; then
        curl -X POST -H "Content-Type: application/json" -d '{ "tmpl": "", "params": {}, "name": "test" }' localhost:3000/template
fi
