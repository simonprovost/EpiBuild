#!/usr/bin/env bash

description="This script, make re and generate a coverage report in terminale"

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
	echo -ne "$colorgreen success : $1.${code}0m"
    echo "########################"
}

function delay()
{
    sleep 0.2;
}

CURRENT_PROGRESS=0
function progress()
{
    PARAM_PROGRESS=$1;
    PARAM_PHASE=$2;
    local code="\033["
    colorgreen="${code}1;32m"
    colorpurple="${code}1;35m"
    colorred="${code}1;31m"

    if [ $CURRENT_PROGRESS -le 0 -a $PARAM_PROGRESS -ge 0 ]  ; then echo -ne "[$colorgreen..........................${code}0m] $colorred (0%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 5 -a $PARAM_PROGRESS -ge 5 ]  ; then echo -ne "[$colorgreen#.........................${code}0m] $colorred (5%)  ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 10 -a $PARAM_PROGRESS -ge 10 ]; then echo -ne "[$colorgreen##........................${code}0m] $colorred (10%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 15 -a $PARAM_PROGRESS -ge 15 ]; then echo -ne "[$colorgreen###.......................${code}0m] $colorred (15%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 20 -a $PARAM_PROGRESS -ge 20 ]; then echo -ne "[$colorgreen####......................${code}0m] $colorred (20%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 25 -a $PARAM_PROGRESS -ge 25 ]; then echo -ne "[$colorgreen#####.....................${code}0m] $colorred (25%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 30 -a $PARAM_PROGRESS -ge 30 ]; then echo -ne "[$colorgreen######....................${code}0m] $colorred (30%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 35 -a $PARAM_PROGRESS -ge 35 ]; then echo -ne "[$colorgreen#######...................${code}0m] $colorred (35%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 40 -a $PARAM_PROGRESS -ge 40 ]; then echo -ne "[$colorgreen########..................${code}0m] $colorred (40%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 45 -a $PARAM_PROGRESS -ge 45 ]; then echo -ne "[$colorgreen#########.................${code}0m] $colorred (45%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 50 -a $PARAM_PROGRESS -ge 50 ]; then echo -ne "[$colorgreen##########................${code}0m] $colorred (50%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 55 -a $PARAM_PROGRESS -ge 55 ]; then echo -ne "[$colorgreen###########...............${code}0m] $colorred (55%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 60 -a $PARAM_PROGRESS -ge 60 ]; then echo -ne "[$colorgreen############..............${code}0m] $colorred (60%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 65 -a $PARAM_PROGRESS -ge 65 ]; then echo -ne "[$colorgreen#############.............${code}0m] $colorred (65%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 70 -a $PARAM_PROGRESS -ge 70 ]; then echo -ne "[$colorgreen###############...........${code}0m] $colorred (70%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 75 -a $PARAM_PROGRESS -ge 75 ]; then echo -ne "[$colorgreen#################.........${code}0m] $colorred (75%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 80 -a $PARAM_PROGRESS -ge 80 ]; then echo -ne "[$colorgreen####################......${code}0m] $colorred (80%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 85 -a $PARAM_PROGRESS -ge 85 ]; then echo -ne "[$colorgreen#######################...${code}0m] $colorred (85%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
    if [ $CURRENT_PROGRESS -le 90 -a $PARAM_PROGRESS -ge 90 ]; then echo -ne "[$colorgreen##########################${code}0m] $colorred (100%) ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r" ; delay; fi;
    if [ $CURRENT_PROGRESS -le 100 -a $PARAM_PROGRESS -ge 100 ];then echo -ne 'Done!                                            \n' ; delay; fi;

    CURRENT_PROGRESS=$PARAM_PROGRESS;

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

progress 10 "Create build folder..."
    mkdir build_branches &> /dev/null
    if [[ $? -ne 0 ]]; then
        exitError 'mkdir directory build_branches failed'
     fi
    cd build_branches &> /dev/null
    if [[ $? -ne 0 ]]; then
        exitError 'change directory build_branches failed'
     fi
    cmake ../../ &> /dev/null
    if [[ $? -ne 0 ]]; then
        exitError 'cmake ../../ failed'
     fi
progress 20 "Make tests...                              "
    make -j8 &> /dev/null
    if [[ $? -ne 0 ]]; then
        exitError 'Compilation failed'
     fi
progress 40 "Run tests...                       "
    cp ./bin/unit_tests ./ &> /dev/null
    if [[ $? -ne 0 ]]; then
        exitError 'copy binary of unit tests failed'
     fi
    ./unit_tests &> /dev/null
progress 60 "Return to home...                     "
	cd ../../
	if [[ $? -ne 0 ]]; then
        exitError 'Return to home failed'
     fi
progress 80 "Generate coverage...                      "
	nothing=1
progress 90 "Print the coverage report...                   "
    gcovr -r . --exclude tests/ --exclude scripts/build_branches/ --branches &> /dev/null
    if [[ $? -ne 0 ]]; then
        exitError 'gcovr -r failed'
     fi
progress 100 "Done !                            "
success "Print the coverage report."
gcovr -r . --exclude tests/ --exclude googletest/ --branches
if [[ $? -ne 0 ]]; then
        exitError 'gcovr -r failed'
     fi