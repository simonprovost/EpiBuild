#!/usr/bin/env bash

cd tests

if [ -d "build_unit" ]; then
  echo "build_unit exist."
else
   mkdir build_unit
fi

cd build_unit
cmake ../../
make -j8
cp ./bin/unit_tests ./
./unit_tests
cd ../../