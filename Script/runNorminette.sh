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


################################## MAIN
description="This script, clone the repo and run a norminette on the project."
echo $description

read -p "What is your login ? :  "  login
read -p "Which project do you want to test ? :  "  nameProject
read -p "Which branch would you tested ? :  "  branch_name
read -p "Location of your norminette ? :  "  pathToNorminette
read -p "name of nominette(binary_name) ? :  "  normiName

################################## GLOBAL VARIABLE
#nameProject=NULL
folder_name=${nameProject}
link_clone=git@git.epitech.eu:/${login}@epitech.eu/${nameProject}
#binary_name=NULL

 if [[ -d "$folder_name" ]]; then
          rm -rf ${folder_name}
 fi
 git clone -b ${branch_name} --single-branch ${link_clone} &> /dev/null
 if [[ $? -ne 0 ]]; then
    git clone -b ${branch_name} --single-branch ${link_clone}
    echo ${link_clone}
    exitError 'Clone Failed'
  fi

cd ${folder_name} &> /dev/null

cp ${pathToNorminette} ./
echo ${normiName}
ruby ${normiName} > outputNorminette
if [[ $? == 84 ]]; then
    exitError 'Error with the norminette $normiName : see the output: outputNorminette [file].'
fi
