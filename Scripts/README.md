# Scripts

This directory contains general-purpose JavaScript scripts for P4wnP1 A.L.O.A.

## About Scripts

These scripts extend the functionality of P4wnP1 A.L.O.A beyond HID attacks. They can be used for:
- Automation tasks
- Network configuration
- Custom payload logic
- Integration with other tools

## Installation

To install these scripts on your P4wnP1 A.L.O.A device:

1. Access your P4wnP1 A.L.O.A device via SSH or web interface
2. Navigate to the scripts directory:
   ```
   cd /usr/local/P4wnP1/scripts
   ```
3. Upload or create the .js files from this repository
4. Make scripts executable if needed:
   ```
   chmod +x script_name.js
   ```

## Usage

Scripts can be executed directly via SSH or triggered from other P4wnP1 A.L.O.A components.

### Via SSH:
```bash
node /usr/local/P4wnP1/scripts/script_name.js
```

### Via P4wnP1 Framework:
Scripts can be integrated into P4wnP1 payloads and triggered as part of attack chains.

## Contributing

When adding scripts, please:
1. Include clear comments explaining functionality
2. Document any dependencies
3. Test on actual P4wnP1 A.L.O.A hardware when possible
4. Follow JavaScript best practices
