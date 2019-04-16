#!/usr/bin/env bash

binary=./arcade
# binary_ref=./bin_ref/nanotekspice

if [ -d "tmp" ]; then
  rmdir tmp
fi
mkdir tmp

################################# FUNCS FOR TESTS
process_bin_ref() {
    fileinput=./nts_files/bash/input_command/$nameOfFile
    outputcommand=./tmp/outputcommand
    outputcommand_ref=./tmp/outputcommand_ref
    ((total++))
    $binary $filecompute $PARAM < $fileinput > $outputcommand
    ret_own=$?
    $binary_ref $filecompute $PARAM < $fileinput > $outputcommand_ref

    DIFF=$(diff <(cat $outputcommand) <(cat $outputcommand_ref))
    if [ $ret_own == 84 ]; then
         echo -e "$nameOftest: Got: $DIFF\nExpected: \"\"\n"
    else
        if [ "$DIFF" != "" ]; then
            echo -e "$nameOftest: Got: $DIFF\nExpected: \"\"\n"
        else
            echo -e "$nameOftest : PASSED\n"
            ((test_passed++))
        fi
    fi
}

process_bin_ref_return() {
    ((total++))
    $binary $libcompute $PARAM &> /dev/null
   if [ $? != $return_requested ]; then
	    echo -e "$nameOftest: Got: $DIFF\nExpected: \"\"\n"
    else
	    echo -e "$nameOftest : PASSED\n"
	    ((test_passed++))
    fi
}
##################################################################
################### The following tests will be the tests with a bin ref.
################### La partie "A MODIFIER" uniquement est à toucher.
################### Le reste n'est pas à modifier.
################### CATEGORIES :
###################################### Simple tests
###################################### Primitives Tests
###################################### Advanced Tests
###################################### ERROR TESTS

################# GLOBAL VARIABLES ###############
code="\033["
colorred="${code}1;31m"

test_passed=0
total=0

###################################################################################################################### Simple Tests

echo -ne "$colorred make fclean in progress... ${code}0m\n"
make fclean

echo -ne "$colorred Compilation games in progress... ${code}0m\n"
make games &> /dev/null

echo -ne "$colorred Compilation libs in progress... ${code}0m\n"
make re &> /dev/null



# ####################### SIMPLE arcade without args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 84
nameOftest="Simple arcade"
PARAM=""
libcompute=
return_requested=84

#~~~~~~~~~~~~~~~~~~~~A NE PAS TOUCHER~~~~~~~~~~~~~~~~~~~~#
process_bin_ref_return
# ############################################################


# ####################### SIMPLE arcade with args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 84
nameOftest="Simple arcade with one bad args"
PARAM=""
libcompute=./lib/sfsdffd
return_requested=84

#~~~~~~~~~~~~~~~~~~~~A NE PAS TOUCHER~~~~~~~~~~~~~~~~~~~~#
process_bin_ref_return
# ############################################################

# ####################### SIMPLE arcade with args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 0
nm -an arcade | c++filt | grep dlopen &> /dev/null
((total++))
if [ $? == 1 ]; then
         echo -e "dlopen not found\n"
else
        echo -e "dlopen Found : PASSED\n"
        ((test_passed++))
fi
# ############################################################

# ####################### SIMPLE arcade with args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 0
nm -an arcade | c++filt | grep dlsym &> /dev/null
((total++))
if [ $? == 1 ]; then
         echo -e "dlsym not found\n"
else
        echo -e "dlsym Found : PASSED\n"
        ((test_passed++))
fi
# ############################################################

# ####################### SIMPLE arcade with args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 0
nm -an arcade | c++filt | grep dlclose &> /dev/null
((total++))
if [ $? == 1 ]; then
         echo -e "dlclose not found\n"
else
        echo -e "dlclose Found : PASSED\n"
        ((test_passed++))
fi
# ############################################################

# ####################### SIMPLE arcade with args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 0
nm -an arcade | c++filt | grep dlerror &> /dev/null
((total++))
if [ $? == 1 ]; then
         echo -e "dlerror not found\n"
else
        echo -e "dlerror Found : PASSED\n"
        ((test_passed++))
fi
# ############################################################

# ####################### SIMPLE arcade with args #######################

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 0
((total++))
gameFound=0

name1=nibbler
name2=pacman
name3=qic
name4=centipede
name5=solarfox
ls ./games/lib_arcade_$name1.so &> /dev/null
if [ $? != 2 ]; then
        ((gameFound++))
fi

ls ./games/lib_arcade_$name2.so &> /dev/null
if [ $? != 2 ]; then
        ((gameFound++))
fi

ls ./games/lib_arcade_$name3.so &> /dev/null
if [ $? != 2 ]; then
        ((gameFound++))
fi

ls ./games/lib_arcade_$name4.so &> /dev/null
if [ $? != 2 ]; then
        ((gameFound++))
fi

ls ./games/lib_arcade_$name5.so &> /dev/null
if [ $? != 2 ]; then
        ((gameFound++))
fi

if [ $gameFound -ge 2 ]; then
    echo -e "Game : OK PASSED\n"
    ((test_passed++))
else
    echo -e "Game : ERROR --> you have : " $gameFound " game(s)\n"
fi
# ############################################################

# ####################### SIMPLE arcade with args #######################
touch ./lib/lib_arcade_aa.so
chmod +x ./lib/lib_arcade_aa.so

#~~~~~~~~~~~~~~~~~~~~A MODIFIER~~~~~~~~~~~~~~~~~~~~#
# Description:
# return 84
nameOftest="Simple arcade with one bad lib"
PARAM=""
libcompute=./lib/lib_arcade_aa.so
return_requested=84
#~~~~~~~~~~~~~~~~~~~~A NE PAS TOUCHER~~~~~~~~~~~~~~~~~~~~#
process_bin_ref_return
rm -rf ./lib/lib_arcade_aa.so
# ############################################################

echo "####################################"
echo "SUCCESS TEST --> " $test_passed
test_fail=$(echo "$total-$test_passed" |bc )
echo "FAIL TEST --> " $test_fail
echo "TOTAL TESTS --> " $total
echo "####################################"