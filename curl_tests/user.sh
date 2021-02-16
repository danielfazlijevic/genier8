#!/bin/bash
if [[ $1 = create ]]; then
    curl -X POST -H "Content-Type: application/json" -d '{"email": "desk@4bees.io", "password": "pass" }' 159.89.15.98:3000/user
elif [[ $1 = all ]]; then
    curl localhost:3000/user
elif [[ $1 = email ]]; then
    curl localhost:3000/user/$2
fi
