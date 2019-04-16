#!/usr/bin/env bash

description="This script, walk through the repo and delete all builds and useless files to clean the repo."

################################## FUNCS
function exitError() {
    local code="\033["
    colorred="${code}1;31m"

    clear
    echo "########################"
	echo -ne "$colorred error : $1. ${code}0m\n"
    echo "########################"
	exit 1
}

function success() {
local code="\033["
colorgreen="${code}1;32m"
    clear
    echo "########################"
	echo -ne "$colorgreen success : $1.${code}0m\n"
    echo "########################"
}

################################## MAIN
echo $description

cd scripts &> /dev/null
if [[ $? -ne 0 ]]; then
        exitError 'scripts not found'
     fi

if [ -d "build_branches" ]; then
  rm -rf build_branches &> /dev/null
  if [[ $? -ne 0 ]]; then
        exitError 'rm rf build_branches failed'
     fi
fi

if [ -d "build_coverage_html" ]; then
  rm -rf build_coverage_html &> /dev/null
  if [[ $? -ne 0 ]]; then
        exitError 'rm rf build_coverage_html failed'
     fi
fi


cd ../
if [[ $? -ne 0 ]]; then
        exitError 'change directory to ../ failed'
     fi
clear
if [[ $? -ne 0 ]]; then
        exitError 'clear stdout failed'
     fi

cd tests/
if [[ $? -ne 0 ]]; then
        exitError 'change directory to tests failed'
     fi

if [ -d "build_unit" ]; then
  rm -rf build_unit
  if [[ $? -ne 0 ]]; then
        exitError 'rm rf build_unit failed'
     fi
fi

cd ../
if [[ $? -ne 0 ]]; then
        exitError 'change directory to ../ failed'
     fi

if ls ./googletest/CMakeCache.txt 1> /dev/null 2>&1; then
    rm -rf ./googletest/CMakeCache.txt
     if [[ $? -ne 0 ]]; then
        exitError 'rm rf  ./googletest/CMakeCache.txt failed'
     fi
fi
if ls ./googletest/CMakeFiles/ 1> /dev/null 2>&1; then
    rm -rf ./googletest/CMakeFiles
     if [[ $? -ne 0 ]]; then
        exitError 'rm rf  ./googletest/CMakeFiles/ failed'
     fi
fi

if ls ./cmake-build-debug/ 1> /dev/null 2>&1; then
    rm -rf ./cmake-build-debug/
    if [[ $? -ne 0 ]]; then
        exitError 'rm rf  ./cmake-build-debug/ failed'
     fi
fi

cd ./googletest
if [[ $? -ne 0 ]]; then
        exitError 'change directory to googletest failed'
     fi

if [ -d "googletest-build" ]; then
  rm -rf googletest-build
  if [[ $? -ne 0 ]]; then
        exitError 'rm rf  ./googletest-build/ failed'
     fi
fi

cd ../
 if [[ $? -ne 0 ]]; then
        exitError 'change directory to ../ failed'
     fi

if [ -d "tmp" ]; then
  rm -rf tmp
   if [[ $? -ne 0 ]]; then
        exitError 'rm rf  tmp failed'
     fi

fi

ls *.so
 if [[ $? == 0 ]]; then
        echo 'Deleting of all lib so from the root repository...'
	rm -rf *.so
 fi

cd bonus &> /dev/null
if [ -d "cmake-build-debug" ]; then
  rm -rf cmake-build-debug
  if [[ $? -ne 0 ]]; then
        exitError 'rm rf  ./cmake build debug/ failed'
     fi
fi

if [ -d "build" ]; then
  rm -rf build
  if [[ $? -ne 0 ]]; then
        exitError 'rm rf  ./build / failed'
     fi
fi

success "Clean repo !"
