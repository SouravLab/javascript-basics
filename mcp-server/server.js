import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  TextContent,
} from "@modelcontextprotocol/sdk/types.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASICS_DIR = path.join(__dirname, "..", "basics");

// Create server instance
const server = new Server({
  name: "javascript-basics-mcp",
  version: "1.0.0",
});

// Define tools
const tools = [
  {
    name: "list_files",
    description: "List all JavaScript files in the basics folder",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "read_file",
    description: "Read the content of a JavaScript file",
    inputSchema: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Name of the file in the basics folder (e.g., asciitest.js)",
        },
      },
      required: ["filename"],
    },
  },
  {
    name: "analyze_file",
    description: "Analyze a JavaScript file and provide insights",
    inputSchema: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Name of the file to analyze",
        },
      },
      required: ["filename"],
    },
  },
  {
    name: "modify_file",
    description: "Modify a JavaScript file with new content",
    inputSchema: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Name of the file to modify",
        },
        content: {
          type: "string",
          description: "New content for the file",
        },
      },
      required: ["filename", "content"],
    },
  },
  {
    name: "get_file_stats",
    description: "Get statistics about a JavaScript file",
    inputSchema: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Name of the file",
        },
      },
      required: ["filename"],
    },
  },
];

// Tool implementations
async function listFiles() {
  try {
    const files = fs.readdirSync(BASICS_DIR).filter((f) => f.endsWith(".js"));
    return {
      content: [
        {
          type: "text",
          text: `Found ${files.length} JavaScript files:\n${files.join("\n")}`,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error listing files: ${error.message}`,
        },
      ],
    };
  }
}

async function readFile(filename) {
  try {
    const filePath = path.join(BASICS_DIR, filename);
    
    // Security: Prevent directory traversal
    if (!filePath.startsWith(BASICS_DIR)) {
      return {
        content: [
          {
            type: "text",
            text: "Error: Invalid file path",
          },
        ],
      };
    }

    const content = fs.readFileSync(filePath, "utf-8");
    return {
      content: [
        {
          type: "text",
          text: content,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error reading file: ${error.message}`,
        },
      ],
    };
  }
}

async function analyzeFile(filename) {
  try {
    const filePath = path.join(BASICS_DIR, filename);
    
    if (!filePath.startsWith(BASICS_DIR)) {
      return {
        content: [
          {
            type: "text",
            text: "Error: Invalid file path",
          },
        ],
      };
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");
    const stats = {
      lines: lines.length,
      functions: (content.match(/function\s+\w+|const\s+\w+\s*=\s*\(|let\s+\w+\s*=\s*\(/g) || [])
        .length,
      variables: (content.match(/(?:var|let|const)\s+\w+/g) || []).length,
      comments: (content.match(/\/\//g) || []).length,
      imports: (content.match(/import\s+|require\(/g) || []).length,
    };

    return {
      content: [
        {
          type: "text",
          text: `Analysis of ${filename}:\n${JSON.stringify(stats, null, 2)}`,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error analyzing file: ${error.message}`,
        },
      ],
    };
  }
}

async function modifyFile(filename, content) {
  try {
    const filePath = path.join(BASICS_DIR, filename);
    
    if (!filePath.startsWith(BASICS_DIR)) {
      return {
        content: [
          {
            type: "text",
            text: "Error: Invalid file path",
          },
        ],
      };
    }

    fs.writeFileSync(filePath, content, "utf-8");
    return {
      content: [
        {
          type: "text",
          text: `Successfully modified ${filename}`,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error modifying file: ${error.message}`,
        },
      ],
    };
  }
}

async function getFileStats(filename) {
  try {
    const filePath = path.join(BASICS_DIR, filename);
    
    if (!filePath.startsWith(BASICS_DIR)) {
      return {
        content: [
          {
            type: "text",
            text: "Error: Invalid file path",
          },
        ],
      };
    }

    const stats = fs.statSync(filePath);
    return {
      content: [
        {
          type: "text",
          text: `File stats for ${filename}:\nSize: ${stats.size} bytes\nCreated: ${stats.birthtime}\nModified: ${stats.mtime}`,
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error getting file stats: ${error.message}`,
        },
      ],
    };
  }
}

// Handle tool listing
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request;

  switch (name) {
    case "list_files":
      return await listFiles();
    case "read_file":
      return await readFile(args.filename);
    case "analyze_file":
      return await analyzeFile(args.filename);
    case "modify_file":
      return await modifyFile(args.filename, args.content);
    case "get_file_stats":
      return await getFileStats(args.filename);
    default:
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool: ${name}`,
          },
        ],
      };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("JavaScript Basics MCP Server running on stdio");
}

main().catch(console.error);
