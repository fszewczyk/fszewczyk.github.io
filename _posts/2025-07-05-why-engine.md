---
layout: post
title: "Reinventing the wheel: why and how am I building a game engine?"
description: "You got Unity, Godot, Unreal Engine and 12761 other free game engines. Why would you ever go through the pain of building your own? I do it for exactly two reasons: to have a platform for learning new software concepts and because it's awesome."
date: 2025-07-06
---


# The Why

Whenever I want to learn something new, I try to come up with a small project that will implement the idea in question. So far, it’s been highly effective, because implementing anything from scratch got me a decent fundamental understanding; I got to see how it works in practice, and in the end I had a working demo that I could show to friends and potential employers.

This worked well for some time. However, after the 8471th time reimplementing a simple ImGui UI, small CMake build and basic C++ patterns, I got quite tired of the boilerplate work involved. Originally, I wanted to just abstract the shared functionality into some library or a repository template. However, I’d still end up with a collection of small, mostly useless applications that fail to teach me proper software design, simply due to their limited scope and scale.

Finally, the idea of building a game engine popped up. Literally any technical concept I would ever want to learn could be simply a feature in the engine:
1. **Want to learn concurrency?** Build a parallel job system.
2. **Want to learn networking?** Implement multiplayer.
3. **Want to learn a new language?** Add scripting support for that language.
4. **Want to learn about compilers or interpreters?** Make your own scripting language.
5. **Want to learn AI?** Maybe the NPCs will finally behave naturally.

The list goes on. I am not able to think of a single concept, at least vaguely related to computer science, that does not fit into this. The above argument aligns with the words of a very wise man:

> Any real-time program responding to frequent inputs from the environment, is a game engine from a software engineering perspective - Me, 2025

But that's a topic for a different post.

# The What

So a game engine it is. I am aiming for a large project with asset management, parallel job system, good-looking and fast rendering, physics, etc. It will also have a fully capable GUI. As I progress, I will be able to come up with a single, well-defined feature, _terrain editor_ for instance, read papers and watch talks on the topic, and finally sit down and deploy it within a reasonable time-frame, without many obstacles, easily tying it into the existing functionality of the engine. If I manage to do that, I will have successfully fulfilled the goal of [_The Why_](#the-why), the game engine will become my go-to framework for all new project ideas I may have.

I have one main priority when designing the core: developer velocity at late stages of the project. I wanted to make sure that whatever I lay out at the beginning will allow me to build new functionality fast and that the usage of the core functionality will be so simple that even a drunk monkey, that hasn't looked at the code base in six months, will be able to quickly pick up the existing patterns. I want to make it difficult to write bad code. I’m mentioning this just because some parts of the engine may seem overengineered, given the limited functionality. That’s usually on purpose.

As a side effect, I would like the very core of the project to become a real-time processing framework that can be used for many other things other than games. For instance, I can imagine building a fully functional and highly performant robotics control pipeline using my ECS and job system. But that's a problem for later.

The development is public on GitHub under the name [shkyera-engine](https://github.com/fszewczyk/shkyera-engine).

# The How

C++ has been my weapon of choice for some time already. This stays the same for the core part of the engine. Currently, I do not care much about modern graphics programming so I will rely on OpenGL. Until my project becomes unbearably complex, I will stay away from package managers and will rely solely on git submodules for third-party libraries and plain CMake for building. I do not have a Windows machine, so I will only target Linux and MacOS, at least for now.

# The Plan

In future posts, I’ll give a detailed overview of the very core of the project, the infrastructure I will use to build new “mini-projects”, learn new things, and do it fast. Hopefully, it will be comprehensive enough to give a holistic view of what I’m trying to build, it will be legible enough to help others build their own software, and it will act as a documentation for the engine itself. I’ll also do my best to keep it light and not let it become a super-heavy technical reference.
