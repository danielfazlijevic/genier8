#!/bin/bash
echo $1
if [[ $1 = post ]]; then
    curl -X POST -H "Content-Type: application/json" -d '{"email": "jokicnikola07@gmail.com", "password": "pass" }' localhost:3000/user
fi
