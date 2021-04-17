#!/bin/bash

concurrently "npm run --prefix ./api start" "npm run --prefix ./scp-ui start" --kill-others --kill-others-on-fail