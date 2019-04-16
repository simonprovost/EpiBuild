#!/usr/bin/env bash

################################## GLOBAL VARIABLE
folder_name=OOP_arcade_2018
link_clone=git@git.epitech.eu:/clement.baudonnel@epitech.eu/OOP_arcade_2018
binary_name=arcade
description="This script, clone the repo and test some commands to check if the repo is good to be delivery to Epitech"

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

    if [ $CURRENT_PROGRESS -le 0 -a $PARAM_PROGRESS -ge 0 ]  ; then echo -ne "[$colorgreen..........................${code}0m] $colorred (0%)  ${code}0m $colorpurple $PARAM_PHASE ${code}0m\r"  ; delay; fi;
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

read -p "Which branch would you tested ? :  "  branch_name

if [ -d "temp_verif" ]; then
      rm -rf temp_verif
fi
mkdir temp_verif
cd temp_verif

progress 10 "Clone..."
     if [ -d "$folder_name" ]; then
          rm -rf $folder_name
     fi
     git clone -b $branch_name --single-branch $link_clone &> /dev/null
     if [[ $? -ne 0 ]]; then
        echo 'Clone Failed'
     fi
progress 20 "Clone success."
    cd $folder_name/
    binary $binary_name
progress 40 "$binary_name Binary : OK. Make rules in processing...     "
   # nmcli networking off &> /dev/null
    make re 
	if [[ $? -ne 0 ]]; then
		exitError 'compilation failed'
	fi
progress 85 "Test all make_* rules. (games/graphicals/core)"
    make games
    if [[ $? -ne 0 ]]; then
		exitError 'make games failed, make sure that games rules exist'
	fi
	make fclean &> /dev/null
	make graphicals &> /dev/null
    if [[ $? -ne 0 ]]; then
		exitError 'make graphicals failed, make sure that graphicals rules exist'
	fi
	make fclean &> /dev/null
	make core &> /dev/null
    if [[ $? -ne 0 ]]; then
		exitError 'make graphicals failed, make sure that graphicals rules exist'
	fi
progress 90 "All make_* rules : OK.                                           "
    cd ../../
    rm -rf temp_verif
progress 100 "Done ! "

success "All verif are OK. Thanks.\n                                         "
