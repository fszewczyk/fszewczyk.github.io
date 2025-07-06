---
layout: distill
title: Basics of a Game Engine
description: Motivations behind and a (hopefully) comprehensive guide to building foundations for a full-fledged game engine
date: 2025-07-03

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Introduction
    subsections:
      - name: The Why
      - name: The What
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: ECS
---

# Introduction

## The Why

Whenever I want to learn something new, I try to come up with a small project that will implement the idea in question. So far, it’s been highly effective, because implementing anything from scratch got me a decent fundamental understanding, I got to see how it works in practice, and in the end I had a working demo that I could show to friends and potential employers.

This worked decently for some time. However, after the n-th time, at the beginning of each new project, I found myself rebuilding largely the same software, reimplementing the same patterns. In the end, all of them needed a build system, all of them needed a UI, Originally, I wanted to just abstract the shared functionality into some library or a repository template. However, I’d still end up with a collection of small, mostly useless, applications, that fail to teach me proper software design, simply due to their limited scope and scale.

Finally, the idea of building a game engine popped up. Literally any technical concept I would ever want to learn, could be simply a feature in the engine:
1. **Want to learn concurrency?** Build a parallel job system.
2. **Want to learn networking?** Implement multiplayer.
3. **Want to learn a new language?** Add scripting support for that language.
4. **Want to learn about compilers or interpreters?** Make your own scripting language.
5. **Want to learn AI?** Maybe the NPCs will finally behave naturally.

The list goes on. I am not able to think of a single concept, at least vaguely related to computer science, that does not fit into this.

## The What

So a game engine it is. In this post, I’ll try to give a detailed overview of the very core of the project, the infrastructure I will use to build new “mini-projects”, learn new things, and do it fast. Hopefully, it will be comprehensive enough to give a holistic view at what I’m trying to build, it will be legible enough to help others build their own software, and it will act as a documentation for the engine itself. I’ll also do my best to keep it light and not let it become a super-heavy technical reference. Even though C++ is my weapon of choice, all the concepts should be easily translatable to any other real language (not LISP).

I had one main priority when designing the core: developer velocity at late stages of the project. I wanted to make sure that whatever I lay out at the beginning will allow me to build new functionality fast and that the usage of the core functionality will be so simple that even a drunk monkey, that did not look at the code base for 6 months, will be able to quickly pick up the existing patterns. I want to make it difficult to write bad code. I’m mentioning this just because some parts may seem overengineered given the current, limited functionality. That’s usually on purpose.

# Input Management

# Entities and Components
We need to be able to store data regarding the game.
This includes the environment, models, physics bodies, cameras, and even the player itself.
All of these _entities_ might be quite heterogenous. 
Some of them may share some data.
Both cameras and physics bodies have a position in the world.
Both a player and a random tree have a 3D model.
some may share exactly zero properties.
However, it's difficult to argue for any similaries between a script and an audio source.

To allow such heterogenity, a standard approach is to seperate small properties into _components_. Then, we can attach these components (position, 3D model) into the entities (tree, player). It's dead-simple, but extremly powerful.

To give an example, a lot of the entities will need to be positioned in the world.
In that case, they will just have a `TransformComponent`:

```cpp
struct TransformComponent
{
   glm::vec3 position;
   glm::quat orientation;
   glm::vec3 scale;
};
```

> **Entity** - literally just an ID that is used to look up components

> **Components** - literally just data, no behavior, no methods

> **Systems** - operate on components, ideally no/little internal state

Before I go deeper into the implementation, let me quickly discuss an alternative, popular approach that can also be used to store the game data.

## Why not Game Objects?
I can already hear @jblow getting mad that I do not need an ECS for a project like this and that I'd be much better off with GameObjects.

[tweet of jblow shitting on ecs]

He's probably right. GameObjects

## Registry
_Registry_ is the central source of truth regarding the state of the game, as well as the state of the project inside the game engine.
It's one giant, shared instance, that pretty much all of the important modules have access to.
It stores all the information regarding the entities and their components.
In principle, the main interface should be quite simple.

```cpp
// We can create new Entities,
const auto camera = registry.addEntity();

// attach components,
registry.add<TransformComponent>(glm::vec3{1, 1, 1});
registry.add<NameComponent>("My Camera");
registry.add<CameraComponent>();

// as well as access existing components.
registry.get<CameraComponent>(camera).zoom = 1.5;
```

It would also be quite useful to iterate over all components of a specific type.
```cpp
for(const auto& transform : registry.get<TransformComponent>())
{
   // Apply gravity and move all objects down
}
```

Or even 

## Archetypes

## Registry Viewers

# Systems

## Audio System

## Physics System

## Rendering System


# Job System

# Asset Management

