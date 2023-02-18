#!/bin/sh

WORKSPACE="${WORKSPACE-1}"
TIMER="${TIMER-0}"
TIMER_CHANGE="${TIMER_CHANGE-30}"

echo "Sleeping for $TIMER"
sleep $TIMER

#For SWAY
#echo "Sending sway msg to Workspace $WORKSPACE"
#export SWAYSOCK=$(ls /run/user/1000/sway-ipc.*.sock | head -n 1)
#[[ -z "$SWAYSOCK" ]] && echo "Sway Not Found" || swaymsg "workspace $WORKSPACE"

#For Weston
#define KEY_TAB			15
#define KEY_LEFTCTRL		29
##define KEY_LEFTALT		56
##define KEY_F1			59
##define KEY_F2			60
##define KEY_F3			61
##define KEY_F4			62
##define KEY_F5			63
##define KEY_F6			64

#echo "The Workspace is ${WORKSPACE}"
#WORKSPACE_KEY=$((58 + $WORKSPACE))
#echo "The Workspace Key is ${WORKSPACE_KEY}"
export YDOTOOL_SOCKET=$(ls /run/user/63/.ydotool_socket | head -n 1)
[[ -z "$YDOTOOL_SOCKET" ]] && echo "Ydotool Not Found"

while true
do
    # Ctrl TAB
    ydotool key 29:1 15:1 29:0 15:0
    sleep $TIMER_CHANGE
done
