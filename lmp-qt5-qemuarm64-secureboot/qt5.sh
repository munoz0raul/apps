#!/bin/bash

WORKSPACE="${WORKSPACE-6}"
TIMER="${TIMER-0}"

echo "Sleeping for $TIMER"
sleep $TIMER

/usr/share/qt5everywheredemo-1.0/QtDemo -platform wayland-egl