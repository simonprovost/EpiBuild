#!/usr/bin/env bash

################################## MAIN
description="This script, clone the repo and test some commands to check if the repo is good to be delivery to Epitech"
echo $description

read -p "What is your login ? :  "  login
read -p "Which project do you want to test ? :  "  nameProject
read -p "What is the binary name of $nameProject project ? :  "  binary_name
read -p "Which branch would you tested ? :  "  branch_name

################################## GLOBAL VARIABLE
#nameProject=NULL
folder_name=${nameProject}
link_clone=git@git.epitech.eu:/${login}@epitech.eu/${nameProject}
#binary_name=NULL

################################## FUNCS
function exitError() {
    local code="\033["
    colorred="${code}1;31m"

    echo "########################"
	echo -ne "$colorred error : $1. ${code}0m\n"
    echo "########################"
	exit 1
}

function success() {
local code="\033["
colorgreen="${code}1;32m"
    echo "########################"
	echo -ne "$colorgreen success : $1.${code}0m\n"
    echo "########################"
}

function binary() {
    ls ./$1 &> /dev/null
    if [[ $? == 0 ]]; then
		exitError 'Before pushed you need to delete nanotekspice binary with make fclean'
	fi
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

if [[ -d "temp_verif" ]]; then
      rm -rf temp_verif
fi
mkdir temp_verif
cd temp_verif

progress 10 "Clone..."
     if [[ -d "$folder_name" ]]; then
          rm -rf ${folder_name}
     fi
     git clone -b ${branch_name} --single-branch ${link_clone} &> /dev/null
     if [[ $? -ne 0 ]]; then
        git clone -b ${branch_name} --single-branch ${link_clone}
        echo ${link_clone}
        exitError 'Clone Failed'
     fi
progress 20 "Clone success."
    cd ${folder_name}/
    binary ${binary_name}
progress 40 "$binary_name Binary : OK. Make rules in processing...     "
    make &> /dev/null
	if [[ $? -ne 0 ]]; then
		exitError 'make failed, make sure that Makefile exist'
	fi
progress 50 "$binary_name Binary : OK. Make rules in processing...     "
    make clean &> /dev/null
	if [[ $? -ne 0 ]]; then
		exitError 'make clean failed, make sure that clean rules exist'
	fi
progress 60 "Test Make clean rules OK."
	make fclean &> /dev/null
    if [[ $? -ne 0 ]]; then
		exitError 'make fclean failed, make sure that fclean rules exist'
	fi
progress 70 "Test Make fclean rules OK."
	make re &> /dev/null
    if [[ $? -ne 0 ]]; then
		exitError 'make re failed, make sure that re rules exist'
	fi
progress 90 "All make_* rules : OK.                                           "
    cd ../../
    rm -rf temp_verif
progress 100 "Done ! "

success "All verif are OK. Thanks.\n                                         "