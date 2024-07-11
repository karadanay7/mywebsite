---
authorname: Aysegul Karadan

title: "Input Handling in Blazor Apps: @bind vs @oninput vs @onchange Usage "
img: /img/blazor-input/1.png
date: 11/07/2024
description: " Learn about the unexpected NuGet package conflict and how a simple reorganization of project layers solved the problem. Read more about my experience in this short post! "
head:
  meta:
    - name: "keywords"
      content: "NuGet package conflict, Visual Studio Code, .NET Core, C#, software development, troubleshooting, NETSDK1082, There was no runtime pack for Microsoft.AspNetCore.App available for the specified RuntimeIdentifier ‘browser-wasm’, browser-wasm error, runtime pack errors"

    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/browser-wasm-error
---

# Input Handling in Blazor Apps: @bind vs @oninput vs @onchange Usage

<div class="flex items-center justify-center"><img src="/img/blazor-input/1.png"  class="rounded w-full">
</div>

## Introduction 
<p>
As a developer, integrating multiple project layers and dependencies can sometimes lead to complex issues, especially when dealing with WebAssembly (Wasm) in .NET. Recently, I encountered an error while setting up a project from another developer, which highlighted the importance of understanding project references and package dependencies. This post will walk through the problem and the solution to help you avoid similar issues in your projects.</p>
