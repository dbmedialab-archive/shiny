#!/bin/bash

echo "Generatiing:"
echo " * Dagbladet"
echo "module.exports = " > ./src/themes/dagbladet/index.js
./node_modules/.bin/babel-node src/themes/dagbladet/source.js >> ./src/themes/dagbladet/index.js

echo " * default-theme"
echo "module.exports = " > ./src/themes/default-theme/index.js
./node_modules/.bin/babel-node src/themes/default-theme/source.js >> ./src/themes/default-theme/index.js

echo " * dinside"
echo "module.exports = " > ./src/themes/dinside/index.js
./node_modules/.bin/babel-node src/themes/dinside/source.js >> ./src/themes/dinside/index.js

echo " * kk"
echo "module.exports = " > ./src/themes/kk/index.js
./node_modules/.bin/babel-node src/themes/kk/source.js >> ./src/themes/kk/index.js

echo " * light-theme"
echo "module.exports = " > ./src/themes/light-theme/index.js
./node_modules/.bin/babel-node src/themes/light-theme/source.js >> ./src/themes/light-theme/index.js

echo " * mat"
echo "module.exports = " > ./src/themes/mat/index.js
./node_modules/.bin/babel-node src/themes/mat/source.js >> ./src/themes/mat/index.js

echo " * seher"
echo "module.exports = " > ./src/themes/seher/index.js
./node_modules/.bin/babel-node src/themes/seher/source.js >> ./src/themes/seher/index.js

echo " * sol"
echo "module.exports = " > ./src/themes/sol/index.js
./node_modules/.bin/babel-node src/themes/sol/source.js >> ./src/themes/sol/index.js

echo " * start"
echo "module.exports = " > ./src/themes/start/index.js
./node_modules/.bin/babel-node src/themes/start/source.js >> ./src/themes/start/index.js

echo " * topp"
echo "module.exports = " > ./src/themes/topp/index.js
./node_modules/.bin/babel-node src/themes/topp/source.js >> ./src/themes/topp/index.js

