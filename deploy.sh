#!/usr/bin/env bash
npm run clean \
&& npm run build \
&& cd storybook-static \
&& git init \
&& git checkout -b gh-pages \
&& git add . \
&& git commit -m 'History will be kind to me, for I intend to write it' \
&& git push -f git@github.com:dbmedialab/shiny.git gh-pages
