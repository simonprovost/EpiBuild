#!/usr/bin/env bash

################################## MAIN
description="   This script, clone the repo and test some commands to check if the repo is good to be delivered to Epitech"

bold="\033[1m"
normal="\033[0m"

echo -e ' ${bold} Description: ${normal} '
echo -e $description
echo -e ''
echo -e ' ${bold} Output Tests: ${normal} '

login=$1
nameProject=$2
binary_name=$3
branch_name=$4

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
	echo "$colorred error : $1. ${code}0m\n"
    echo "########################"
	exit 1
}

function success() {
local code="\033["
colorgreen="${code}1;32m"

    echo "_____________________________________"
	echo -ne "$colorgreen success : $1.${code}0m\n"
}

function binary() {
    ls ./$1 &> /dev/null
    if [[ $? == 0 ]]; then
		exitError 'Before pushed you need to delete your binary with make fclean'
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

    echo -ne "$colorgreen ${code}0m $colorred (${PARAM_PROGRESS}%)  ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r\n"
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
progress 40 "{$binary_name} Binary : OK."
    make &> /dev/null
	if [[ $? -ne 0 ]]; then
		exitError 'make failed, make sure that Makefile exist'
	fi
progress 50 "$binary_name Binary : OK."
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

success "All verif are OK. Thanks.\n                                         "