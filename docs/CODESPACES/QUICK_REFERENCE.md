# devcontainer.json Quick Reference

## Minimal Configuration

```jsonc
{
  "name": "My Project",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "postCreateCommand": "npm install",
  "forwardPorts": [3000]
}
```

## Common Images

| Stack | Image |
|-------|-------|
| Node.js 20 | `mcr.microsoft.com/devcontainers/javascript-node:20-bookworm` |
| Node.js + TypeScript | `mcr.microsoft.com/devcontainers/typescript-node:20` |
| Python 3 | `mcr.microsoft.com/devcontainers/python:3` |
| Universal (multi-lang) | `mcr.microsoft.com/devcontainers/universal:2` |

## Lifecycle Scripts Order

```
initializeCommand  → Host machine (before container)
onCreateCommand    → First time container created
updateContentCommand → When source changes
postCreateCommand  → After create, has user secrets
postStartCommand   → Every container start
postAttachCommand  → Every editor connection
```

## Port Forwarding

```jsonc
{
  "forwardPorts": [3000, 4321],
  "portsAttributes": {
    "3000": {
      "label": "Backend API",
      "onAutoForward": "notify"
    },
    "4321": {
      "label": "Frontend",
      "onAutoForward": "openBrowser"
    }
  }
}
```

**onAutoForward options:** `notify`, `openBrowser`, `openBrowserOnce`, `openPreview`, `silent`, `ignore`

## VS Code Extensions

```jsonc
{
  "customizations": {
    "vscode": {
      "extensions": [
        "astro-build.astro-vscode",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

## Features (Modular Add-ons)

```jsonc
{
  "features": {
    "ghcr.io/devcontainers/features/node:1": { "version": "20" },
    "ghcr.io/devcontainers/features/github-cli:1": {},
    "ghcr.io/devcontainers/features/docker-in-docker:2": {}
  }
}
```

## Variables

| Variable | Description |
|----------|-------------|
| `${localEnv:VAR_NAME}` | Host environment variable |
| `${containerEnv:VAR_NAME}` | Container environment variable |
| `${localWorkspaceFolder}` | Workspace path on host |
| `${localWorkspaceFolderBasename}` | Workspace folder name |

## Environment Variables

```jsonc
{
  // Set in container (all processes)
  "containerEnv": {
    "NODE_ENV": "development"
  },
  
  // Set for tools/terminals only
  "remoteEnv": {
    "PATH": "${containerEnv:PATH}:/custom/bin"
  }
}
```

## Docker Compose

```jsonc
{
  "dockerComposeFile": "docker-compose.yml",
  "service": "app",
  "workspaceFolder": "/workspaces/${localWorkspaceFolderBasename}"
}
```

## Host Requirements

```jsonc
{
  "hostRequirements": {
    "cpus": 4,
    "memory": "8gb",
    "storage": "32gb"
  }
}
```

## Rebuild Commands (VS Code)

- **Rebuild Container**: `Ctrl+Shift+P` → `Codespaces: Rebuild Container`
- **Full Rebuild**: `Ctrl+Shift+P` → `Codespaces: Full Rebuild Container`

## Useful Links

- [Dev Containers Spec](https://containers.dev)
- [devcontainer.json Reference](https://containers.dev/implementors/json_reference/)
- [Available Features](https://containers.dev/features)
- [Microsoft Images](https://github.com/devcontainers/images)
