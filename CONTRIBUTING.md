# Contributing to Son-of-David P4wnP1 A.L.O.A Payloads

Thank you for your interest in contributing! This repository is a community resource for sharing P4wnP1 A.L.O.A payloads and scripts.

## How to Contribute

### 1. Fork the Repository
- Click the "Fork" button on GitHub
- Clone your fork to your local machine
- Create a new branch for your contribution

### 2. Add Your Payload

#### For HID Scripts:
- Place your `.js` file in the `HIDScripts/` directory
- Use clear, descriptive filenames (e.g., `linux_persistence.js`)
- Follow the existing file naming convention (lowercase with underscores)

#### For General Scripts:
- Place your `.js` file in the `Scripts/` directory
- Use clear, descriptive filenames
- Include a README if your script requires special setup

### 3. Payload Requirements

Your payload should include:

#### Header Comments
```javascript
// Payload Name - Brief Description
// Target OS: Windows/Linux/macOS/All
// Purpose: Brief explanation of what it does
// Author: Your Name (optional)
// Compatible with P4wnP1 A.L.O.A
```

#### Configuration Section (if applicable)
```javascript
// Configuration - CHANGE THESE VALUES
var TARGET_IP = "192.168.1.1";
var PORT = "8080";
```

#### Clear Documentation
- Explain what the payload does
- List any prerequisites
- Note required permissions
- Include usage examples

#### Code Quality
- Use meaningful variable names
- Add comments for complex logic
- Follow JavaScript best practices
- Test your payload before submitting

### 4. Testing

Before submitting:
- [ ] Test the payload on actual P4wnP1 A.L.O.A hardware (preferred)
- [ ] Test in a controlled environment
- [ ] Verify keyboard layout compatibility
- [ ] Check timing delays work on different system speeds
- [ ] Document any quirks or issues

### 5. Documentation

Update documentation as needed:
- Add your payload to `PAYLOADS.md` with:
  - Name and filename
  - Description
  - Target OS
  - Purpose
  - Special requirements or configuration
- Update relevant README files if adding new categories

### 6. Submit a Pull Request

When ready:
1. Commit your changes with a clear commit message:
   ```
   Add [payload name] for [target OS]
   
   - Brief description of what it does
   - Any notable features
   ```

2. Push to your fork
3. Create a Pull Request with:
   - Clear title
   - Description of the payload
   - Testing results
   - Any special notes

## Code Style Guidelines

### JavaScript Style
```javascript
// Use single quotes for strings
var message = 'Hello World';

// Clear variable names
var targetIPAddress = '192.168.1.1';

// Comments for complex operations
// Wait for system to be ready before executing
delay(2000);

// Consistent indentation (2 or 4 spaces)
if (condition) {
    doSomething();
}
```

### HIDScript Best Practices
```javascript
// Always set keyboard layout
layout('us');

// Add delays for reliability
delay(2000); // Wait for system ready

// Use appropriate key combinations
press("GUI r"); // Windows Run dialog
press("CTRL ALT t"); // Linux terminal

// Type strings with proper escaping
type("command\n"); // \n for Enter key
```

## Security and Ethics

### Required Disclaimer
All payloads must include this disclaimer:
```javascript
// DISCLAIMER: For educational and authorized testing only.
// Always obtain proper authorization before use.
// The author is not responsible for misuse.
```

### Prohibited Content
Do NOT submit payloads that:
- Contain hardcoded credentials that aren't yours
- Target specific organizations without permission
- Include malware or destructive code without clear warnings
- Violate GitHub's Terms of Service or Acceptable Use Policy

### Responsible Disclosure
- Do not submit payloads exploiting zero-day vulnerabilities
- If your payload demonstrates a vulnerability, ensure it's properly disclosed
- Consider ethical implications of your contributions

## Review Process

Pull requests will be reviewed for:
1. **Functionality** - Does it work as described?
2. **Code Quality** - Is it well-written and documented?
3. **Security** - Does it follow ethical guidelines?
4. **Documentation** - Is it properly documented?

## Questions?

If you have questions:
- Open an issue on GitHub
- Check existing issues for similar questions
- Review P4wnP1 A.L.O.A official documentation

## License and Attribution

By contributing, you agree that:
- Your contributions will be available under the same terms as the repository
- You have the right to submit the code
- You'll be credited for your contributions (if desired)

## Additional Resources

- [P4wnP1 A.L.O.A Official Repository](https://github.com/RoganDawes/P4wnP1_aloa)
- [P4wnP1 A.L.O.A Documentation](https://p4wnp1.readthedocs.io/)
- [HIDScript Basics](https://p4wnp1.readthedocs.io/en/latest/Getting-Started/HIDScript-Basics/)

---

Thank you for contributing to the P4wnP1 A.L.O.A community!
