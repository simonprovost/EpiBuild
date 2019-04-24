#!/usr/bin/env bash

function exitError() {
    local code="\033["
    colorred="${code}1;31m"

    #clear
    echo "########################"
	echo -ne "$colorred error : $1. ${code}0m\n"
    echo "########################"
	exit 1
}

make tests_run &> outputUnitTests
if [[ $? == 84 ]]; then
    exitError 'Error with tests_run rules or your unit tests, see the output: outputUnitTests [file].'
fi
# folder tests which contain all the tests created by the user.
# If this folder doesn't exist, we couldn't run the series of unit tests.
#if [[ -d "tests" ]]; then
#   echo "test folder exist."
#else
#   exitError "You don't have any 'tests' folder"
#fi
#
## We will try to go into "test" folder.
## If the change directory command failed we will exit the script with an error.
#cd tests &> /dev/null
#if [[ $? -ne 0 ]]; then
#   exitError 'change directory to 'tests' failed'
# fi
#
## Imagine that the user use a framework like google tests with cmakeLists compilation, we will make the project with the appropriate command.
#if [[ -d "build_unit" ]]; then
#   echo "build_unit exist we will compile a project with cmakeLists"
#   cd build_unit
#   cmake ../../
#fi
#
## Try to make the project and unit Tests.
## If the make command failed we will exit the script with an error.
#make -j8
#if [[ $? -ne 0 ]]; then
#   exitError 'make rules failed.'
# fi
#
# If the user used a cmakeLists we will try to detect that and copy the binary into the correct destination.
#cd .. &> /dev/null
#checkIfCmakeLists=0
#
#if [[ -d "build_unit" ]]; then
#    ((checkIfCmakeLists++))
#fi
#cd - &> /dev/null
#if [[ ${checkIfCmakeLists} > 0 ]]; then
#    cp ./bin/unit_tests ./
#fi
#
## Try to run the unit tests no matter the method that the user used (cmakelists or only makefile)
## If the make command failed we will exit the script with an error.
#ls unit_tests &> /dev/null
#if [[ $? -ne 0 ]]; then
#   exitError 'unitTests couldnt running.'
# fi
#./unit_tests > outputUnitTests
#
#
## Try to return to the home of the project.
#cd ../ &> /dev/null
#if [[ -d "build_unit" ]]; then
#    cd ../
#fi
#end of the script.
