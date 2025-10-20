# HIDScripts

This directory contains HID (Human Interface Device) scripts for P4wnP1 A.L.O.A.

## About HID Scripts

HID scripts allow P4wnP1 A.L.O.A to emulate keyboard and mouse input. These scripts are written in JavaScript and use the P4wnP1 HIDScript API.

## Installation

To install these scripts on your P4wnP1 A.L.O.A device:

1. Access your P4wnP1 A.L.O.A device via SSH or web interface
2. Navigate to the HIDScripts directory:
   ```
   cd /usr/local/P4wnP1/HIDScripts
   ```
3. Upload or create the .js files from this repository
4. The scripts will be available in the web interface under "HID Scripts"

## Usage

1. Access the P4wnP1 A.L.O.A web interface (default: http://172.16.0.1:8000)
2. Navigate to "HID Scripts"
3. Select the script you want to run
4. Click "Run" to execute the payload

## Common HIDScript Commands

- `layout('us')` - Set keyboard layout
- `type("text")` - Type text
- `press("KEY")` - Press a key or key combination
- `delay(ms)` - Wait for specified milliseconds
- `press("GUI r")` - Press Windows key + R (opens Run dialog)

## Adding Your Own Scripts

Feel free to add your own HID scripts to this directory. Follow the existing examples for structure and syntax.
