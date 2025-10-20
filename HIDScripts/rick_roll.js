// Rick Roll Payload - Fun and Harmless
// Opens Rick Astley's "Never Gonna Give You Up" in browser
// Compatible with P4wnP1 A.L.O.A

layout('us'); // Set keyboard layout

// Wait for system to be ready
delay(2000);

// Open Run dialog (Windows)
press("GUI r");
delay(500);

// Open default browser with YouTube video
type("https://www.youtube.com/watch?v=dQw4w9WgXcQ\n");
delay(2000);

// Optional: Press F11 for fullscreen (uncomment if desired)
// press("F11");
