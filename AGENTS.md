<!-- ellvtr:ai-rules:start -->

1. Agent skills live in ./.agents/plugins/ellvtr/skills; `ellvtr` skills live in `./.agents/plugins/ellvtr/skills`.
   1. Skills follow the Claude specification;
2. Skills are mandatory:
   1. On session start, load every `SKILL.md`; treat `name` + `description` as the only trigger source;
   2. if `description` matches the user intent, that skill must be considered;
   3. never let skill metadata drift.
3. Always-on rules are mandatory: on session start, load `./.agents/plugins/ellvtr/skills/always-on.md`;
   1. Follow local repo rules in addition, if any.
4. Treat `@enforced` as hard constraints;
   - scan for '@enforced' to keep it at top priority
5. Explicit user instructions override rules:
   1. `@enforced` > skill rules > always-on rules;
   2. Follow repo-local instructions if they differ.
6. Skill 'use-mcp'; do health check.

<!-- ellvtr:ai-rules:end -->
