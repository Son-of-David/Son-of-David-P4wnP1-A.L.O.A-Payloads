# Son-of-David P4wnP1 A.L.O.A Payloads

A collection of JavaScript payloads for P4wnP1 A.L.O.A that I've developed. These scripts are available for download and installation on your P4wnP1 A.L.O.A device.

## About P4wnP1 A.L.O.A

P4wnP1 A.L.O.A (A Little Offensive Appliance) is a powerful penetration testing platform based on Raspberry Pi Zero W. It can emulate USB devices like keyboards, network adapters, and more to perform various security testing tasks.

## Repository Structure

```
.
├── HIDScripts/          # HID (Human Interface Device) attack scripts
│   └── README.md        # Documentation for HID scripts
├── Scripts/             # General purpose scripts and utilities
│   └── README.md        # Documentation for general scripts
└── README.md            # This file
```

## Installation

### Option 1: Direct Download
1. Browse to the script you want from this repository
2. Download the `.js` file
3. Access your P4wnP1 A.L.O.A device (via SSH or web interface)
4. Upload the file to the appropriate directory:
   - HID scripts: `/usr/local/P4wnP1/HIDScripts/`
   - General scripts: `/usr/local/P4wnP1/scripts/`

### Option 2: Git Clone
```bash
# SSH into your P4wnP1 A.L.O.A device
ssh pi@172.16.0.1

# Clone this repository
git clone https://github.com/Son-of-David/Son-of-David-P4wnP1-A.L.O.A-Payloads.git

# Copy scripts to appropriate locations
cp Son-of-David-P4wnP1-A.L.O.A-Payloads/HIDScripts/*.js /usr/local/P4wnP1/HIDScripts/
cp Son-of-David-P4wnP1-A.L.O.A-Payloads/Scripts/*.js /usr/local/P4wnP1/scripts/
```

## Usage

### HID Scripts
1. Access the P4wnP1 A.L.O.A web interface at `http://172.16.0.1:8000`
2. Navigate to "HID Scripts" section
3. Select the script you want to run
4. Configure any parameters if needed
5. Click "Run" to execute the payload

### General Scripts
Execute scripts via SSH:
```bash
node /usr/local/P4wnP1/scripts/script_name.js
```

## Contributing

Contributions are welcome! If you have useful payloads to share:

1. Fork this repository
2. Add your scripts to the appropriate directory
3. Include clear comments and documentation
4. Submit a pull request

Please ensure your scripts:
- Are well-documented with comments
- Include usage instructions
- Have been tested on P4wnP1 A.L.O.A hardware
- Follow JavaScript best practices

## Disclaimer

These payloads are for educational and authorized security testing purposes only. Always obtain proper authorization before using these tools. The author is not responsible for any misuse or damage caused by these scripts.

## Resources

- [P4wnP1 A.L.O.A Official Repository](https://github.com/RoganDawes/P4wnP1_aloa)
- [P4wnP1 A.L.O.A Documentation](https://p4wnp1.readthedocs.io/)
- [HIDScript Documentation](https://p4wnp1.readthedocs.io/en/latest/Getting-Started/HIDScript-Basics/)

## License

These scripts are provided as-is for educational purposes. Use at your own risk.
