# GitHub Codespaces Configuration Guide

This document provides comprehensive guidance for configuring GitHub Codespaces using dev containers.

## Table of Contents

- [Overview](#overview)
- [File Structure](#file-structure)
- [devcontainer.json Reference](#devcontainerjson-reference)
- [Common Configuration Patterns](#common-configuration-patterns)
- [Node.js/Astro Project Setup](#nodejsastro-project-setup)
- [Features](#features)
- [Lifecycle Scripts](#lifecycle-scripts)
- [Port Forwarding](#port-forwarding)
- [VS Code Customizations](#vs-code-customizations)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

GitHub Codespaces uses **dev containers** (Development Containers) to create fully configured development environments. When you create a codespace, GitHub:

1. Creates a Docker container based on your configuration
2. Clones your repository into the container
3. Runs lifecycle scripts (install dependencies, etc.)
4. Connects your editor (VS Code web or desktop)

**Official Documentation:**
- [GitHub Codespaces Docs](https://docs.github.com/en/codespaces)
- [Dev Containers Specification](https://containers.dev)
- [devcontainer.json Schema](https://containers.dev/implementors/json_reference/)

## File Structure

Dev container configuration files live in the `.devcontainer` directory:

```
.devcontainer/
├── devcontainer.json    # Main configuration file (required)
├── Dockerfile           # Custom Docker image (optional)
├── docker-compose.yml   # Multi-container setup (optional)
└── scripts/             # Setup scripts (optional)
    └── post-create.sh
```

### Alternative Locations

- `.devcontainer/devcontainer.json` - Standard location
- `.devcontainer.json` - Root of repository (must start with `.`)
- `.devcontainer/<name>/devcontainer.json` - Multiple configurations

## devcontainer.json Reference

### Minimal Configuration

```jsonc
{
  "name": "My Project",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20"
}
```

### Complete Property Reference

#### General Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Display name for the dev container |
| `image` | string | Base Docker image to use |
| `build.dockerfile` | string | Path to Dockerfile (relative to devcontainer.json) |
| `build.context` | string | Docker build context path (default: `.`) |
| `build.args` | object | Docker build arguments |
| `features` | object | Dev Container Features to install |
| `forwardPorts` | array | Ports to forward from container |
| `portsAttributes` | object | Port-specific settings |
| `postCreateCommand` | string/array | Command to run after container creation |
| `postStartCommand` | string/array | Command to run on every container start |
| `postAttachCommand` | string/array | Command to run when tool attaches |
| `customizations` | object | Tool-specific settings (VS Code, etc.) |
| `remoteUser` | string | User to run as in container |
| `containerEnv` | object | Environment variables for container |
| `remoteEnv` | object | Environment variables for tools/terminals |
| `workspaceFolder` | string | Default folder to open |

#### Image vs Dockerfile

**Using an image:**
```jsonc
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20-bookworm"
}
```

**Using a Dockerfile:**
```jsonc
{
  "build": {
    "dockerfile": "Dockerfile",
    "context": "..",
    "args": {
      "NODE_VERSION": "20"
    }
  }
}
```

## Common Configuration Patterns

### Node.js Project (Basic)

```jsonc
{
  "name": "Node.js",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "postCreateCommand": "npm install",
  "forwardPorts": [3000],
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint"
      ]
    }
  }
}
```

### Node.js with TypeScript

```jsonc
{
  "name": "Node.js & TypeScript",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    }
  },
  "postCreateCommand": "npm install",
  "forwardPorts": [3000, 4321],
  "customizations": {
    "vscode": {
      "settings": {
        "typescript.tsdk": "node_modules/typescript/lib"
      },
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

### Full-Stack with Docker Compose

```jsonc
{
  "name": "Full Stack",
  "dockerComposeFile": "docker-compose.yml",
  "service": "app",
  "workspaceFolder": "/workspaces/${localWorkspaceFolderBasename}",
  "forwardPorts": [3000, 5432],
  "postCreateCommand": "npm install"
}
```

## Node.js/Astro Project Setup

For Astro projects like this one, use:

```jsonc
{
  "name": "Astro Development",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20-bookworm",
  
  // Install dependencies after container creation
  "postCreateCommand": "npm install",
  
  // Start dev server automatically (optional)
  "postStartCommand": "npm run dev",
  
  // Forward Astro dev server port
  "forwardPorts": [4321],
  "portsAttributes": {
    "4321": {
      "label": "Astro Dev Server",
      "onAutoForward": "openPreview"
    }
  },
  
  // VS Code customizations
  "customizations": {
    "vscode": {
      "extensions": [
        "astro-build.astro-vscode",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ],
      "settings": {
        "editor.formatOnSave": true
      }
    }
  }
}
```

## Features

Features are modular, shareable units of installation code. Browse available features at [containers.dev/features](https://containers.dev/features).

### Syntax

```jsonc
{
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    },
    "ghcr.io/devcontainers/features/git:1": {},
    "ghcr.io/devcontainers/features/github-cli:1": {}
  }
}
```

### Popular Features

| Feature | ID | Description |
|---------|-----|-------------|
| Node.js | `ghcr.io/devcontainers/features/node:1` | Node.js and npm |
| Git | `ghcr.io/devcontainers/features/git:1` | Git version control |
| GitHub CLI | `ghcr.io/devcontainers/features/github-cli:1` | GitHub command line tool |
| Docker-in-Docker | `ghcr.io/devcontainers/features/docker-in-docker:2` | Run Docker inside container |
| Python | `ghcr.io/devcontainers/features/python:1` | Python runtime |
| AWS CLI | `ghcr.io/devcontainers/features/aws-cli:1` | AWS command line tools |

## Lifecycle Scripts

Scripts run at different points in the container lifecycle:

```
initializeCommand     → Runs on HOST machine before container starts
onCreateCommand       → Runs once when container is first created
updateContentCommand  → Runs when source content changes
postCreateCommand     → Runs after onCreateCommand, has user secrets
postStartCommand      → Runs every time container starts
postAttachCommand     → Runs every time a tool attaches
```

### Execution Order

```
1. initializeCommand (on host)
2. Container creation
3. onCreateCommand
4. updateContentCommand  
5. postCreateCommand
6. postStartCommand
7. postAttachCommand (when VS Code connects)
```

### Command Formats

**String (runs in shell):**
```jsonc
"postCreateCommand": "npm install && npm run build"
```

**Array (direct execution, no shell):**
```jsonc
"postCreateCommand": ["npm", "install"]
```

**Object (parallel execution):**
```jsonc
"postCreateCommand": {
  "install": "npm install",
  "setup": "cp .env.example .env"
}
```

## Port Forwarding

### Basic Port Forwarding

```jsonc
{
  "forwardPorts": [3000, 4321, 5432]
}
```

### Port Attributes

```jsonc
{
  "forwardPorts": [3000, 4321],
  "portsAttributes": {
    "3000": {
      "label": "API Server",
      "onAutoForward": "notify",
      "protocol": "http"
    },
    "4321": {
      "label": "Astro Dev",
      "onAutoForward": "openBrowser"
    }
  },
  "otherPortsAttributes": {
    "onAutoForward": "silent"
  }
}
```

### onAutoForward Options

| Value | Behavior |
|-------|----------|
| `notify` | Show notification (default) |
| `openBrowser` | Open in system browser |
| `openBrowserOnce` | Open browser only first time |
| `openPreview` | Open in VS Code preview |
| `silent` | Forward silently |
| `ignore` | Don't auto-forward |

## VS Code Customizations

### Extensions

```jsonc
{
  "customizations": {
    "vscode": {
      "extensions": [
        "astro-build.astro-vscode",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "bradlc.vscode-tailwindcss",
        "streetsidesoftware.code-spell-checker"
      ]
    }
  }
}
```

### Settings

```jsonc
{
  "customizations": {
    "vscode": {
      "settings": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.tabSize": 2,
        "files.trimTrailingWhitespace": true,
        "typescript.tsdk": "node_modules/typescript/lib"
      }
    }
  }
}
```

## Variables

Use these variables in string values:

| Variable | Description |
|----------|-------------|
| `${localEnv:VAR}` | Environment variable on host machine |
| `${containerEnv:VAR}` | Environment variable in container |
| `${localWorkspaceFolder}` | Path to workspace on host |
| `${containerWorkspaceFolder}` | Path to workspace in container |
| `${localWorkspaceFolderBasename}` | Workspace folder name |

**Example:**
```jsonc
{
  "remoteEnv": {
    "LOCAL_USER": "${localEnv:USER}",
    "PATH": "${containerEnv:PATH}:/custom/bin"
  }
}
```

## Best Practices

### 1. Use Specific Image Tags

```jsonc
// Good - specific version
"image": "mcr.microsoft.com/devcontainers/javascript-node:20-bookworm"

// Avoid - may change unexpectedly  
"image": "mcr.microsoft.com/devcontainers/javascript-node:latest"
```

### 2. Keep postCreateCommand Fast

Heavy operations slow down codespace creation. Consider:
- Using prebuilds for slow setup
- Caching node_modules in a volume
- Running non-essential setup in postStartCommand

### 3. Document Required Secrets

```jsonc
{
  "secrets": {
    "API_KEY": {
      "description": "API key for external service",
      "documentationUrl": "https://docs.example.com/api-keys"
    }
  }
}
```

### 4. Set Minimum Host Requirements

```jsonc
{
  "hostRequirements": {
    "cpus": 4,
    "memory": "8gb",
    "storage": "32gb"
  }
}
```

### 5. Use Features Over Dockerfile When Possible

Features are modular and easier to maintain:

```jsonc
{
  "features": {
    "ghcr.io/devcontainers/features/node:1": { "version": "20" },
    "ghcr.io/devcontainers/features/github-cli:1": {}
  }
}
```

## Troubleshooting

### View Creation Logs

In VS Code: `Codespaces: View Creation Logs`

### Common Issues

**Port not accessible:**
- Ensure `forwardPorts` includes the port
- Check if app binds to `0.0.0.0` not just `localhost`
- For Astro: use `--host` flag

**Dependencies not installed:**
- Check `postCreateCommand` ran successfully
- View creation logs for errors
- Try rebuilding container: `Codespaces: Rebuild Container`

**Extensions not loading:**
- Verify extension IDs are correct
- Check VS Code extension marketplace for current IDs
- Rebuild container after changing extensions

### Rebuild Container

From VS Code Command Palette:
- `Codespaces: Rebuild Container` - Normal rebuild
- `Codespaces: Full Rebuild Container` - Clear cache and rebuild

## Resources

- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- [Dev Containers Specification](https://containers.dev)
- [devcontainer.json Reference](https://containers.dev/implementors/json_reference/)
- [Available Features](https://containers.dev/features)
- [Available Templates](https://containers.dev/templates)
- [Microsoft Dev Container Images](https://github.com/devcontainers/images)
