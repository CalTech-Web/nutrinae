# Nutrinae

Next.js 16, React 19, TypeScript, Tailwind CSS 4
Deployed on Vercel: https://nutrinae.vercel.app
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/nutrinae/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/nutrinae/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/nutrinae/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/nutrinae/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
