# JavaScript Basics MCP Server

A Model Context Protocol (MCP) server that provides tools for analyzing and modifying JavaScript files in the `basics/` folder.

## Features

- **list_files**: List all JavaScript files in the basics folder
- **read_file**: Read content of a specific JavaScript file
- **analyze_file**: Analyze a file and get statistics (lines, functions, variables, etc.)
- **modify_file**: Modify a JavaScript file with new content
- **get_file_stats**: Get file metadata (size, creation date, modification date)

## Installation

```bash
cd mcp-server
npm install
```

## Usage

### Start the server
```bash
npm start
```

### Development mode (with auto-reload)
```bash
npm run dev
```

## Tools

### list_files
Returns all `.js` files in the `basics/` directory.

### read_file
Reads and returns the full content of a specified file.

**Parameters:**
- `filename` (string): Name of the file (e.g., `asciitest.js`)

### analyze_file
Analyzes a file and returns statistics like:
- Line count
- Function count
- Variable count
- Comment count
- Import count

**Parameters:**
- `filename` (string): Name of the file to analyze

### modify_file
Modifies a file with new content. Use with caution!

**Parameters:**
- `filename` (string): Name of the file to modify
- `content` (string): New content for the file

### get_file_stats
Returns file statistics (size, creation date, modification date).

**Parameters:**
- `filename` (string): Name of the file

## Security

This server includes path validation to prevent directory traversal attacks. All file operations are restricted to the `basics/` directory.

## Integration with AI Agents

This MCP server can be integrated with AI agents to:
- Analyze code patterns and quality
- Suggest improvements
- Generate documentation
- Refactor code
- Debug issues

Configure your AI client (Claude, etc.) to connect to this MCP server for enhanced code analysis capabilities.
