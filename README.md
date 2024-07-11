<p align="center" style="font-size: 40px; font-weight: 600;">Template nextjs-nestjs-microservices for starters</p>

## Description

Template for starting Nx with technologies: Nextjs, Nestjs microservices, kafka, docker-compose with multi-env, husky, lint-staged

This project using pnpm package manager in the root directory, and isolated services running with docker-compose

## Installation

To install, you need to install root directory packages and each service's packages:

Root directory's package:

```bash
$ pnpm install
```

Service's packages:

```bash
$ cd apps/template-nestjs/template-nestjs/analytics && pnpm install
```

```bash
$ cd apps/template-nestjs/template-nestjs/backend && pnpm install
```

```bash
$ cd apps/template-nestjs/template-nestjs/communication && pnpm install
```

```bash
$ cd apps/template-nestjs/template-nestjs/email && pnpm install
```

# Running locally

You can run local environment using terminal at the root directory:

```bash
$ make build-development
```

```bash
$ make start-development
```

# Running staging(Updating...)

You can run staging environment using terminal at the root directory:

```bash
$ make build-staging
```

```bash
$ make start-staging
```

# Running production(Updating...)

You can run production environment using terminal at the root directory:

```bash
$ make build-production
```

```bash
$ make start-production
```
