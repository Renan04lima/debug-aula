# Aula Depuração usando o VSCode

## Agenda

- A importância da depuração
- Configuração do Ambiente de Depuração
- Uso de Breakpoints
- Debug actions
- Depuração avançada
- Dicas para configurar debug no Expo/Next.js

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: <https://go.microsoft.com/fwlink/?linkid=830387>
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run API",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "tsnd",
      "runtimeArgs": [
        "-r",
        "dotenv/config",
        "-r",
        "tsconfig-paths/register",
        "--transpile-only",
        "--rs",
        "--respawn",
        "--ignore-watch",
        "node_modules",
        "src/app.ts"
      ],
      "restart": true,
      "cwd": "${workspaceRoot}",
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": ["<node_internals>/**/*.js"]
    },
    {
      "name": "Run API 2",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "cwd": "${workspaceRoot}",
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": ["<node_internals>/**/*.js"]
    },
    {
      "name": "Attach API",
      "type": "node",
      "request": "attach",
      "port": 4321, // add --inspect=4321 no comando de executar
      "restart": true,
      "internalConsoleOptions": "openOnSessionStart",
      "cwd": "${workspaceRoot}",
      "skipFiles": ["<node_internals>/**/*.js"]
    }
  ]
}
```


## Tipos de breakpoints

- inline
- condicional
- hit count
- log points

## Links

https://nextjs.org/docs/getting-started/installation
https://nextjs.org/docs/pages/building-your-application/configuring/debugging
https://docs.expo.dev/debugging/tools/
https://fbflipper.com/