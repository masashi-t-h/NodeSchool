#!/bin/sh
echo -n "Number? "
read num

echo -n "me? "
read me

echo -n "filename? "
read filename


if [ ! -d "$PWD/learnyounode/$num" ]; then
	mkdir $PWD/learnyounode/$num
fi
if [ ! -d "$PWD/learnyounode/$num/$me" ]; then
	mkdir $PWD/learnyounode/$num/$me
fi
cp $filename $PWD/learnyounode/$num/$me/$filename
