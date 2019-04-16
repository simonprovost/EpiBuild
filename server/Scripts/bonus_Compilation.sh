#!/usr/bin/env bash

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

###################################################

echo "change directory $PWD into $PWD/bonus"
cd bonus &> /dev/null
if [[ $? -ne 0 ]]; then
        exitError 'bonus folder not found'
     fi

echo "change directory $PWD into $PWD/build"
cd build &> /dev/null
if [[ $? -ne 0 ]]; then
        mkdir build
        cd build
else
    echo "rmdir $PWD/build and create a new build directory to be sure"
    cd ..
    rm -rf build
    mkdir build
    cd build
fi

echo "cmake .. to generate a makefile from cmakelists"
cmake .. &> /dev/null
if [[ $? -ne 0 ]]; then
        exitError 'cmake error'
     fi

echo "make -j2... Compilation running..."
echo $PWD
make -j2
if [[ $? -ne 0 ]]; then
        echo 'compilation error'
        exit 84
     fi

echo "Return to the root directory"
cd ../../
if [[ $? -ne 0 ]]; then
        exitError 'return to the root directory error'
     fi

success "BONUS was created !"
