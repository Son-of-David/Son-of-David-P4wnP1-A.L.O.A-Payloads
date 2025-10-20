// Example HID Script - Simple Keystroke Payload
// This script demonstrates basic keyboard emulation
// Compatible with P4wnP1 A.L.O.A

layout('us'); // Set keyboard layout

// Wait for system to be ready
delay(2000);

// Open Run dialog (Windows)
press("GUI r");
delay(500);

// Type and execute notepad
type("notepad\n");
delay(1000);

// Type a message
type("Hello from P4wnP1 A.L.O.A!\n");
type("This is an example payload.\n");
