# Payload Catalog

This document provides a comprehensive list of all available payloads in this repository.

## HID Scripts

HID (Human Interface Device) scripts emulate keyboard and mouse input to automate tasks on target systems.

### 1. Example Keystroke (`example_keystroke.js`)
**Description:** Basic demonstration of keyboard emulation  
**Target OS:** Windows  
**Purpose:** Educational - shows fundamental HIDScript commands  
**Actions:**
- Opens Run dialog
- Launches Notepad
- Types a sample message

---

### 2. Windows Information Gathering (`windows_info_gather.js`)
**Description:** Collects system information from Windows target  
**Target OS:** Windows  
**Purpose:** Reconnaissance  
**Actions:**
- Gathers computer name, username, OS details
- Collects IP address information
- Lists installed programs
- Saves output to text file

---

### 3. WiFi Password Dump (`wifi_password_dump.js`)
**Description:** Extracts saved WiFi passwords from Windows  
**Target OS:** Windows  
**Purpose:** Credential harvesting  
**Actions:**
- Enumerates saved WiFi profiles
- Extracts passwords using netsh
- Saves results to text file
- Opens results in Notepad

---

### 4. Reverse Shell Windows (`reverse_shell_windows.js`)
**Description:** Establishes a reverse shell connection  
**Target OS:** Windows  
**Purpose:** Remote access  
**Configuration Required:**
- Set `ATTACKER_IP` to your listener IP
- Set `ATTACKER_PORT` to your listener port
**Prerequisites:**
- Netcat listener running: `nc -lvnp 4444`

⚠️ **WARNING:** This is a powerful payload. Only use with proper authorization.

---

### 5. Rick Roll (`rick_roll.js`)
**Description:** Fun, harmless prank payload  
**Target OS:** Windows/macOS/Linux  
**Purpose:** Entertainment/Demonstration  
**Actions:**
- Opens YouTube in default browser
- Plays "Never Gonna Give You Up"

---

## General Scripts

General purpose scripts for automation, configuration, and payload orchestration.

### 1. Example Shell Script (`example_shell_script.js`)
**Description:** Template for creating custom scripts  
**Purpose:** Educational - demonstrates script structure  
**Use Case:** Starting point for custom functionality

---

### 2. Network Configuration (`network_config.js`)
**Description:** Network settings configuration utility  
**Purpose:** Automation - configure P4wnP1 network settings  
**Features:**
- Interface configuration
- IP address management
- DHCP range setup

---

### 3. Payload Orchestrator (`payload_orchestrator.js`)
**Description:** Coordinates multiple payload executions  
**Purpose:** Automation - manage complex attack chains  
**Features:**
- Define payload execution order
- Configurable delays between payloads
- Enable/disable individual payloads
- Execution logging

---

## Usage Notes

### Security and Ethics
- All payloads are for **educational and authorized testing only**
- Never use these tools on systems without explicit permission
- Understand the legal implications in your jurisdiction
- The author is not responsible for misuse

### Compatibility
- HID scripts are primarily designed for Windows but may work on other OS
- Test in a controlled environment first
- Some payloads may require administrator privileges
- Timing may need adjustment based on target system performance

### Customization
- All scripts can be modified to fit your needs
- Configuration variables are clearly marked
- Read comments in each file for details
- Follow existing code style when modifying

## Contributing

Have a useful payload to share? See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on submitting your scripts.
