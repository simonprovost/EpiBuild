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

login=$1
nameProject=$2
branch_name=$3
pathToNorminette=$4
normiName=$5

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

if [[ $normiName == "normEZ.rb" ]]; then
    ruby ${normiName}
else
    ./${normiName}
fi


if [[ $? == 84 ]]; then
    exitError 'Error with the norminette $normiName : see the output: outputNorminette [file].'
fi
cd ..
rm -rf ${nameProject}