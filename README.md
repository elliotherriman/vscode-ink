# Ink extension for Visual Studio Code

This extensions adds language support for inkle's ink to Visual Studio Code.

⚠️ The extension is under heavy development and is not available yet on the marketplace.

## Language Features

- Syntax highlighting.
- Errors and warnings through inklecate.

## Installing

### For Users

1. Download the latest release [here](https://github.com/elliotherriman/vscode-ink/releases/latest/download/calico.ink.vsix).
2. Inside Visual Studio Code, open the Command Palette (by default, Control-Shift-P, or Command-Shift-P).
3. Type "Extensions: Install from VSIX", and hit enter.
4. Navigate to the downloaded `.vsix` file, and select it.
5. Reload or restart Visual Studio Code.

### For Developers

1. Clone or download the project into your Visual Studio Code extension's directory.
2. Run `npm install`.
3. Run `tsc` to compile the project.
4. Reload Visual Studio Code.
   
## Configuration settings

The server supports four configuration settings.

- `ink.useLanguageServer`: use the experimental language server.
- `ink.languageServer.mainFilePath`: the path to the main ink file, used by inklecate to build the story.
   If it's not provided, the extension will treat the current file in isolation.
- `ink.languageServer.inklecatePath`: the path to the inklecate. If inklecate is accessible in `$PATH`, you can set it to `inklecate`. If unset, it will choose a bundled version of inklecate, specific to your platform.
- `ink.languageServer.useSpecificRuntime`: whether to use a .NET runtime to execute `inklecate`; possible values are:
    - `none`: use no specific runtime (only available on Windows);
    - `mono`: use Mono runtime;
    - `dotnet`: use .NET Core runtime.

## License

This extension is released under the MIT license. See LICENSE for details.

This repository was forked from [ephread](https://github.com/ephread/vscode-ink)'s original work. My contributions consist of polishing and preparing for release, and not much else. All credit where it's due.
