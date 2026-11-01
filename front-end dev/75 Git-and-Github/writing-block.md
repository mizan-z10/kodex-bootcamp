# GIT & GITHUB MASTER NOTES
## Beginner to Advanced — Professional Software Engineering

**Language:** Hinglish (Roman Hindi + English technical terms)  
**Level:** Beginner → Intermediate → Advanced → Company-Level Workflow

---

# PART 1: GIT AUR GITHUB KI FUNDAMENTALS

## 1. Git kya hai?

Git ek Distributed Version Control System (DVCS) hai jo source code mein hone wale changes ko track karta hai.

**Git ke main benefits:**
- Code ki history maintain karna.
- Purane versions par wapas jaana.
- Multiple developers ka same project par kaam karna.
- Branches mein naye features develop karna.
- Bugs aur conflicting changes ko resolve karna.
- Code review aur release management mein help karna.

## 2. GitHub kya hai?

GitHub ek online platform hai jahan Git repositories host hoti hain.

GitHub ke important features:

- Repositories
- Issues aur Projects
- Pull Requests (PRs)
- Code Reviews
- Branch Protection / Rulesets
- GitHub Actions
- Releases aur Tags
- Environments aur Deployment
- Security alerts aur Dependabot

## 3. Git ke chaar important areas

| Area | Meaning |
|---|---|
| Working Directory | Tumhari current project files |
| Staging Area / Index | Commit ke liye select kiye gaye changes |
| Local Repository | Tumhare computer par saved commits |
| Remote Repository | GitHub par hosted repository |

**Basic workflow:**

Working Directory → Staging Area → Local Repository → Remote Repository

`git add` staging karta hai, `git commit` local history save karta hai, aur `git push` commits ko remote par bhejta hai.

---

# PART 2: GIT INSTALLATION AUR INITIAL SETUP

## 4. Installation verify karna

```bash
git --version
```

Git installed hai ya nahi, aur kaunsa version hai, check karta hai.

Linux Mint / Ubuntu:

```bash
sudo apt update
sudo apt install git
```

Installation ke baad:

```bash
git --version
```

## 5. Git identity configure karna

```bash
git config --global user.name "Mizan Khan"
git config --global user.email "your-email@example.com"
```

Har naye commit ke author ke liye identity set hoti hai. Email wahi use karo jo tum apni commits mein rakhna chahte ho.

Configuration check:

```bash
git config --global --list
git config user.name
git config user.email
```

Git configuration levels:

```bash
git config --system --list
git config --global --list
git config --local --list
```

- `--system`: System-wide configuration.
- `--global`: Current operating-system user ke liye.
- `--local`: Current repository ke liye; repository-specific configuration.

Current repository ke liye alag identity:

```bash
git config --local user.name "Work Developer"
git config --local user.email "work@example.com"
```

Configuration remove karna:

```bash
git config --global --unset user.name
```

**Professional tip:** Company ke work aur personal projects mein different Git identities rakhni pad sakti hain.

## 6. Default branch set karna

```bash
git config --global init.defaultBranch main
```

Naye initialized repositories ki default branch `main` rakhta hai.

---

# PART 3: REPOSITORY BANANA AUR CLONE KARNA

## 7. Naya Git repository banana

```bash
mkdir my-project
cd my-project
git init
```

Current folder ko Git repository banata hai.

```bash
git status
```

Repository ki current state check karta hai.

## 8. GitHub se repository clone karna

```bash
git clone https://github.com/OWNER/REPO.git
```

Remote repository aur uski history ki local copy banata hai.

Specific folder name ke saath:

```bash
git clone https://github.com/OWNER/REPO.git my-app
```

Sirf latest snapshot ke saath shallow clone:

```bash
git clone --depth 1 https://github.com/OWNER/REPO.git
```

Yeh bade repositories mein initial download chhota kar sakta hai, lekin history limited hoti hai.

## 9. Existing local project ko GitHub se connect karna

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

`origin` remote ka conventional naam hai. `-u` upstream tracking set karta hai, taaki future mein simple `git push` aur `git pull` use kar sako.

**Important:** Agar remote repository mein pehle se commits hain, toh push reject ho sakta hai. Pehle remote history samjho; blindly force push mat karo.

---

# PART 4: DAILY USE KI CORE GIT COMMANDS

## 10. Status check karna

```bash
git status
git status --short
git status --branch
```

Current branch, modified files, staged changes aur untracked files batata hai.

## 11. Files stage karna

```bash
git add index.html
git add src/
git add .
git add -A
git add -p
```

- `git add index.html`: Specific file stage karta hai.
- `git add src/`: Directory ke changes stage karta hai.
- `git add .`: Current directory aur uske neeche ke changes stage karta hai.
- `git add -A`: Repository ke changes ko stage karta hai, including additions, modifications aur deletions.
- `git add -p`: Changes ke individual hunks select karne deta hai.

**Company-level habit:** Har baar `git add .` use karne ke bajaye staged changes review karo.

```bash
git diff
git diff --staged
git diff --stat
```

`git diff` unstaged changes dikhata hai; `git diff --staged` staged changes dikhata hai.

## 12. Commit karna

```bash
git commit -m "Add login form"
```

Staged changes ko local repository ki history mein save karta hai.

```bash
git commit
```

Default editor mein commit message likhne deta hai.

```bash
git commit --amend
git commit --amend --no-edit
```

Recent commit ko replace/update karta hai. `--no-edit` existing message ko retain karta hai.

**Warning:** Shared branch par already pushed commit ko amend karna history rewrite karta hai. Team coordination ke bina aisa mat karo.

## 13. Commit history dekhna

```bash
git log
git log --oneline
git log --oneline --graph --all
git log -5
git log --stat
git log --name-status
git log --author="Mizan Khan"
git log --since="7 days ago"
```

Ye history, commit graph, file-level changes aur selected filters dikhate hain.

Specific file ki history:

```bash
git log -- src/App.jsx
```

---

# PART 5: CHANGES CHECK KARNA AUR UNDO KARNA

## 14. Differences dekhna

```bash
git diff
git diff --staged
git diff HEAD
git diff main..feature/login
git diff -- src/App.jsx
```

- Working tree aur staging area ka difference.
- Staging area aur last commit ka difference.
- Current tracked changes aur `HEAD` ke comparison.
- Do branches ke snapshots ka comparison.
- Specific file ka comparison.

## 15. Unstaged changes discard karna

```bash
git restore src/App.jsx
```

File ke unstaged changes ko restore karta hai. Uncommitted changes permanently lose ho sakte hain.

## 16. Staging se file remove karna

```bash
git restore --staged src/App.jsx
```

File ko staging area se hataata hai, lekin working file ke changes preserve karta hai.

## 17. File ko last commit se restore karna

```bash
git restore --source=HEAD -- src/App.jsx
```

Current file ke changes ko last commit wale version se replace karta hai. Pehle backup ya diff check karna behtar hai.

## 18. Commit undo karna

Latest commit undo, changes staged rakho:

```bash
git reset --soft HEAD~1
```

Latest commit undo, changes unstaged rakho:

```bash
git reset --mixed HEAD~1
```

Latest commit aur working-tree changes discard karna:

```bash
git reset --hard HEAD~1
```

**Danger:** `--hard` local changes destroy kar sakta hai. Isko routine undo command mat banao.

## 19. Safe undo: revert

```bash
git revert <commit-hash>
```

Selected commit ko reverse karne wala naya commit banata hai.

```bash
git revert HEAD
```

Latest commit ke changes ko reverse karta hai.

**Company rule:** Shared ya protected branch par published commit undo karne ke liye `git revert` aam taur par safer choice hai.

## 20. Deleted ya modified file recover karna

```bash
git restore --source=HEAD -- path/to/file
```

Last commit se file recover karta hai.

```bash
git reflog
```

Recent local references aur branch/HEAD movements ki history dikhata hai. Accidentally reset ya checkout ke baad recover karne mein useful hai.

```bash
git show <commit-hash>
```

Kisi commit ka content aur metadata dikhata hai.

---

# PART 6: BRANCHES — PROFESSIONAL DEVELOPMENT KA BASE

## 21. Branch commands

```bash
git branch
git branch -a
git branch -r
git branch feature/login
git switch feature/login
git switch -c feature/dashboard
git branch -m feature/new-name
git branch -d feature/login
git branch -D feature/login
```

- `git branch`: Local branches.
- `git branch -a`: Local aur remote-tracking branches.
- `git branch -r`: Remote-tracking branches.
- `git branch feature/login`: Nayi branch banata hai.
- `git switch`: Branch change karta hai.
- `git switch -c`: Branch create aur checkout karta hai.
- `git branch -m`: Branch rename karta hai.
- `git branch -d`: Merged branch delete karta hai.
- `git branch -D`: Force-delete karta hai; unmerged work lose ho sakta hai.

## 22. Company-style branch naming

Examples:

```text
main
develop
feature/student-dashboard
feature/payment-integration
fix/login-validation
hotfix/payment-failure
release/1.2.0
```

Branch names team convention ke hisaab se honi chahiye. Har company ka `develop` ya `release/*` model same nahi hota.

## 23. Branches merge karna

```bash
git switch main
git pull --ff-only
git merge feature/login
```

Feature branch ko `main` mein merge karta hai, provided fast-forward update possible ho.

Explicit merge commit:

```bash
git merge --no-ff feature/login
```

Isse merge commit create hota hai, even when fast-forward possible ho.

Merge abort:

```bash
git merge --abort
```

In-progress merge ko abort karne ki koshish karta hai, jab repository ki state allow kare.

## 24. Merge conflict resolve karna

Conflict mein file aisi dikh sakti hai:

```text
<<<<<<< HEAD
Current branch code
=======
Incoming branch code
>>>>>>> feature/login
```

Resolution workflow:

```bash
git status
```

1. Conflict markers samjho.
2. Correct final code manually choose/edit karo.
3. `<<<<<<<`, `=======`, `>>>>>>>` markers remove karo.
4. Test run karo.
5. Resolved files stage karo.

```bash
git add src/App.jsx
git merge --continue
```

Agar merge process continue karne ki zaroorat ho, `git merge --continue` use karo. Simple merge mein staging ke baad merge commit complete ho sakta hai.

---

# PART 7: REMOTE, PUSH, PULL AUR FETCH

## 25. Remote commands

```bash
git remote -v
git remote add origin <repository-url>
git remote remove origin
git remote rename origin upstream
git remote set-url origin <new-url>
git remote show origin
```

Remote repository ka URL aur configuration manage karte hain.

## 26. Push commands

```bash
git push
git push -u origin main
git push origin feature/login
git push --tags
```

- `git push`: Configured upstream par commits push karta hai.
- `git push -u origin main`: Branch push aur upstream tracking set karta hai.
- `git push origin feature/login`: Specific branch push karta hai.
- `git push --tags`: Local tags ko remote par push karta hai.

## 27. Fetch vs Pull

```bash
git fetch origin
git pull
git pull --ff-only
git pull --rebase
```

- `fetch`: Remote updates download karta hai, current branch ko directly integrate nahi karta.
- `pull`: Fetch karke current branch mein integrate karta hai, configured strategy ke mutabik.
- `pull --ff-only`: Sirf fast-forward update allow karta hai.
- `pull --rebase`: Local commits ko fetched upstream ke upar replay karta hai.

**Professional workflow:**

```bash
git fetch origin
git log --oneline --graph HEAD..origin/main
git status
```

Pehle incoming changes inspect karo, phir merge/rebase strategy choose karo.

## 28. Remote-tracking branch checkout karna

```bash
git switch --track origin/feature/login
```

Remote-tracking branch se local branch banata hai aur upstream set karta hai, agar local branch pehle se maujood na ho.

## 29. Remote branch delete karna

```bash
git push origin --delete feature/login
```

GitHub remote par branch delete karta hai. Team se confirm karna zaroori hai.

Stale remote-tracking references clean karna:

```bash
git fetch --prune
```

Remote par delete hui branches ki stale local tracking references remove karta hai.

---

# PART 8: REBASE AUR ADVANCED HISTORY MANAGEMENT

## 30. Rebase kya hai?

Rebase commits ko doosri base branch ke upar replay karta hai. Isse linear history mil sakti hai.

```bash
git switch feature/login
git fetch origin
git rebase origin/main
```

Feature branch ke commits ko latest fetched `main` ke upar replay karta hai.

Conflict resolve karne ke baad:

```bash
git add <resolved-file>
git rebase --continue
```

Rebase cancel karna:

```bash
git rebase --abort
```

Current commit ko skip karna:

```bash
git rebase --skip
```

Sirf tab skip karo jab tumne verify kar liya ho ki commit ke changes ki zaroorat nahi hai.

## 31. Interactive rebase

```bash
git rebase -i HEAD~3
```

Recent 3 commits ke liye interactive editor kholta hai.

Common actions:

- `pick`: Commit ko retain karo.
- `reword`: Commit message change karo.
- `edit`: Commit par ruk kar changes karo.
- `squash`: Previous commit ke saath combine karo aur messages edit kar sakte ho.
- `fixup`: Commit ko previous commit mein combine karo, generally uska message discard karke.
- `drop`: Commit remove karo.

**Important:** Public/shared commits ko rebase karke rewrite karne se doosre developers ki history complicate ho sakti hai.

## 32. Force push

```bash
git push --force-with-lease
```

Rewritten history ko remote par push karta hai, aur expected remote state change hui ho toh overwrite karne se bachne ki koshish karta hai.

```bash
git push --force
```

Remote history ko forcefully overwrite kar sakta hai. Shared branches par bina explicit coordination ke use mat karo.

---

# PART 9: STASH — TEMPORARY CHANGES SAVE KARNA

## 33. Stash commands

```bash
git stash
git stash push -m "WIP: dashboard filters"
git stash list
git stash show -p
git stash apply
git stash pop
git stash drop
git stash clear
```

- `stash`: Tracked working-tree aur staged changes ko temporary stash karta hai.
- `stash push -m`: Descriptive message ke saath save karta hai.
- `stash list`: Stashes ki list.
- `stash show -p`: Stashed diff.
- `stash apply`: Stash apply karta hai, entry retain hoti hai.
- `stash pop`: Apply karne ke baad successful apply par entry remove karta hai.
- `stash drop`: Specific stash delete karta hai.
- `stash clear`: Saari stash entries delete karta hai.

Untracked files bhi stash karna:

```bash
git stash push -u -m "Save untracked work"
```

Stash ko new branch par apply karna:

```bash
git stash branch feature/recovery stash@{0}
```

**Warning:** Stash permanent backup nahi hai. Important work ko commit ya proper backup karna behtar hai.

---

# PART 10: .GITIGNORE AUR REPOSITORY HYGIENE

## 34. `.gitignore` file

Example:

```gitignore
node_modules/
dist/
build/
.env
.env.*
!.env.example
coverage/
.DS_Store
*.log
```

Git ko matching untracked files ko normally stage/track karne se rokta hai.

**React/Vite project ke liye:**

- `node_modules/` commit mat karo.
- `.env` mein API secrets ya passwords hon toh commit mat karo.
- `.env.example` mein sirf placeholder variable names rakho.
- `package.json` aur lockfile (`package-lock.json`, `pnpm-lock.yaml`, etc.) project ke package-manager convention ke mutabik commit karo.

## 35. Pehle se tracked secret ya file remove karna

```bash
git rm --cached .env
git commit -m "Stop tracking environment file"
```

Git index se file remove karta hai, lekin local working copy retain karta hai.

**Security note:** Agar secret pehle commit ya push ho chuka hai, sirf `.gitignore` ya `git rm --cached` enough nahi hai. Secret ko immediately rotate/revoke karo aur zaroorat par history cleanup karo.

---

# PART 11: TAGS, RELEASES AUR COMMIT DETAILS

## 36. Tags

```bash
git tag
git tag v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git show v1.0.0
git push origin v1.0.0
git push --tags
git tag -d v1.0.0
git push origin --delete v1.0.0
```

- Lightweight tag: Commit ka simple reference.
- Annotated tag: Metadata, tagger aur message store karta hai.
- Release versions ke liye annotated tags aam taur par preferred hain.

## 37. Specific commit inspect karna

```bash
git show <commit-hash>
git show --stat <commit-hash>
git show <commit-hash>:src/App.jsx
git diff <old-commit> <new-commit>
```

Commit content, file-level changes, historical file content aur versions ke differences check karta hai.

---

# PART 12: DEBUGGING AUR RECOVERY COMMANDS

## 38. `git blame`

```bash
git blame src/App.jsx
git blame -L 20,50 src/App.jsx
```

Har line ka last recorded change aur associated commit/author dikhata hai. Iska use code history samajhne ke liye karo, blame game ke liye nahi.

## 39. `git bisect`

Kisi bug ko introduce karne wala commit identify karne mein help karta hai.

```bash
git bisect start
git bisect bad
git bisect good <known-good-commit>
```

Git commits ke beech binary search karta hai. Har selected version ko test karke mark karo:

```bash
git bisect good
git bisect bad
```

Search complete hone par:

```bash
git bisect reset
```

## 40. `git reflog`

```bash
git reflog
git reflog show main
```

Recent local branch/HEAD movements ko inspect karta hai. Reset, rebase ya branch movement ke baad lost reference recover karne mein useful hai.

Example:

```bash
git reflog
git branch recovery-branch <recovered-commit-hash>
```

Isse recovered commit par ek safety branch ban sakti hai.

## 41. `git cherry-pick`

```bash
git cherry-pick <commit-hash>
```

Ek specific commit ke changes ko current branch par apply karke naya commit banata hai.

Multiple commits:

```bash
git cherry-pick <commit1> <commit2>
```

Conflict aaye toh resolve karo, stage karo, phir:

```bash
git cherry-pick --continue
git cherry-pick --abort
```

Use case: Ek branch par bug fix hua hai aur wahi fix release branch mein chahiye, poori branch merge nahi karni.

---

# PART 13: ADVANCED INSPECTION COMMANDS

## 42. Useful inspection commands

```bash
git ls-files
git ls-files --stage
git diff --check
git status --ignored
git check-ignore -v path/to/file
git shortlog -sn
git show-ref
git rev-parse HEAD
git cat-file -p HEAD
```

- `ls-files`: Tracked/index files.
- `ls-files --stage`: Index entries aur modes.
- `diff --check`: Whitespace errors aur conflict-marker issues detect karne mein help.
- `status --ignored`: Ignored files bhi dikhata hai.
- `check-ignore -v`: File ko ignore karne wala rule batata hai.
- `shortlog -sn`: Commit counts by author.
- `show-ref`: References list.
- `rev-parse HEAD`: Current commit hash.
- `cat-file -p HEAD`: Commit object inspect karta hai.

## 43. Maintenance aur cleanup

```bash
git count-objects -v
git gc
git fsck
git clean -n
git clean -fd
```

- `count-objects`: Repository object storage ki information.
- `gc`: Repository maintenance aur object cleanup.
- `fsck`: Object database integrity checks.
- `clean -n`: Untracked files delete karne se pehle dry run.
- `clean -fd`: Untracked files/directories delete karta hai.

**Danger:** `git clean -fd` untracked work permanently delete kar sakta hai. Pehle `git clean -n` chalao.

## 44. Useful configuration

```bash
git config --global core.editor "code --wait"
git config --global pull.ff only
git config --global fetch.prune true
git config --global rerere.enabled true
```

- VS Code ko commit-message editor banane mein help karta hai.
- Pull ko fast-forward-only behavior par set karta hai.
- Deleted remote branches ki stale tracking references clean karne mein help karta hai.
- `rerere` repeated conflicts ke resolutions reuse karne mein help kar sakta hai.

Team policies ke hisaab se configuration vary kar sakti hai. `pull.ff only` conflicts ko automatically resolve nahi karta; divergent history par pull fail ho sakta hai.

---

# PART 14: GITHUB — PULL REQUESTS AUR CODE REVIEW

GitHub ke main collaboration workflows web UI, CLI aur API se manage kiye ja sakte hain.

## 45. Pull Request (PR) workflow

1. Issue ya task assign/identify karo.
2. Latest base branch fetch karo.
3. Feature branch create karo.
4. Code changes aur tests likho.
5. Meaningful commits banao.
6. Feature branch push karo.
7. GitHub par Pull Request open karo.
8. Automated checks aur code review ka wait karo.
9. Feedback address karo.
10. Approval aur required checks ke baad merge karo.

Example:

```bash
git switch main
git pull --ff-only
git switch -c feature/student-search

# Make code changes

git add src/
git diff --staged
git commit -m "Add student search"
git push -u origin feature/student-search
```

GitHub par PR create karo, reviewers add karo aur CI results check karo.

## 46. PR ke important terms

- **Base branch:** Jis branch mein changes merge hone hain.
- **Compare/head branch:** Jis branch se changes aa rahe hain.
- **Review:** Code ki correctness, maintainability aur security check.
- **Approval:** Reviewer ki formal approval.
- **Requested changes:** Reviewer ko fixes chahiye.
- **Checks:** Automated tests, linting, builds ya security checks.
- **Merge commit:** Merge ko explicit commit ke roop mein record karta hai.
- **Squash and merge:** PR ke commits ko ek commit mein combine karta hai.
- **Rebase and merge:** Commits ko base branch par linear sequence mein apply karta hai.

Company repository ki rules aur chosen merge strategy follow karo.

## 47. GitHub Issues aur Projects

**Issues** ka use bugs, features, tasks aur discussions track karne ke liye hota hai.

Example issue title:

```text
[BUG] Student attendance is not saved
```

Issue description mein include karo:

- Problem description
- Reproduction steps
- Expected behavior
- Actual behavior
- Environment
- Screenshots/logs, if relevant
- Acceptance criteria

**Projects** ka use task planning, status tracking aur team workload organize karne ke liye kiya ja sakta hai.

## 48. Branch protection aur rulesets

Company-level repository mein in rules par focus karo:

- `main` branch par direct push restrictions.
- Pull Request required.
- Required reviewers.
- Required status checks.
- Stale approvals dismiss karna, where appropriate.
- Force-push restrictions.
- Branch deletion restrictions.
- CODEOWNERS-based review requirements.

Exact options organization policy, repository settings aur GitHub plan par depend kar sakte hain.

---

# PART 15: GITHUB CLI — TERMINAL SE GITHUB

GitHub CLI (`gh`) GitHub ke saath terminal integration deta hai. Pehle ise install karna hota hai.

## 49. Authentication aur repository commands

```bash
gh auth login
gh auth status
gh repo view
gh repo clone OWNER/REPO
gh repo create
gh repo fork OWNER/REPO
```

- `auth login`: GitHub account authenticate karta hai.
- `auth status`: Current authentication check karta hai.
- `repo view`: Repository information dikhata hai.
- `repo clone`: Repository clone karta hai.
- `repo create`: Naya GitHub repository banata hai.
- `repo fork`: Repository ka fork create karta hai.

## 50. Pull Request commands

```bash
gh pr list
gh pr status
gh pr view
gh pr create
gh pr checkout 42
gh pr diff 42
gh pr checks 42
gh pr review 42 --approve
gh pr merge 42
```

- `pr list`: PR list.
- `pr status`: Tumhare relevant PRs ka status.
- `pr view`: PR details.
- `pr create`: Naya PR.
- `pr checkout`: PR branch local mein checkout.
- `pr diff`: PR ka diff.
- `pr checks`: Automated checks ka status.
- `pr review`: Review submit karta hai.
- `pr merge`: PR merge karta hai, subject to repository permissions/rules.

Approval command sirf authorized aur genuine review ke baad use karo.

## 51. Issues aur workflows

```bash
gh issue list
gh issue view 42
gh issue create
gh run list
gh run view
gh run watch
gh workflow list
gh workflow run workflow.yml
```

Issues manage karne aur GitHub Actions runs inspect/trigger karne mein useful hain. Workflow file aur repository permissions ke mutabik behavior vary kar sakta hai.

## 52. Releases aur secrets

```bash
gh release list
gh release view v1.0.0
gh release create v1.0.0
gh secret list
```

- Releases list/view/create karna.
- Repository secrets ki configured names list karna; secret values normally reveal nahi hoti.

---

# PART 16: SSH AUR AUTHENTICATION

## 53. SSH key generate karna

Linux par:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Key file ka path prompt par select karo. Private key ko safe rakho; passphrase set karna recommended hai.

SSH agent start karna:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Public key dekhna:

```bash
cat ~/.ssh/id_ed25519.pub
```

Public key ko GitHub account ke SSH keys section mein add karo.

Connection test:

```bash
ssh -T git@github.com
```

Remote URL SSH mein set karna:

```bash
git remote set-url origin git@github.com:OWNER/REPO.git
```

**Security rule:** `id_ed25519` private key share, upload ya GitHub repository mein commit mat karo. Sirf `.pub` public key add karni hoti hai.

## 54. HTTPS authentication

GitHub HTTPS operations ke liye browser-based authentication ya supported credential manager use karo. Account password ko Git password ke roop mein use karna supported normal workflow nahi hai.

- Personal Access Tokens (PATs) ko least privilege ke saath use karo.
- Tokens ko code, commits, screenshots ya logs mein expose mat karo.
- Leaked token ko revoke/rotate karo.
- Company ke SSO aur organization policies follow karo.

---

# PART 17: GITHUB ACTIONS — CI/CD BASICS

GitHub Actions automated workflows run karta hai, jaise testing, linting, building aur deployment.

Example file: `.github/workflows/ci.yml`

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run lint
        run: npm run lint

      - name: Run build
        run: npm run build
```

Yeh example assume karta hai ki project mein valid `package-lock.json`, `lint` script aur `build` script maujood hain. Apne project ke hisaab se Node version aur commands update karo.

Important concepts:

- **Workflow:** Automation definition.
- **Event:** `push`, `pull_request` ya manual trigger.
- **Job:** Steps ka group.
- **Runner:** Machine/environment jahan job execute hota hai.
- **Step:** Command ya reusable action.
- **Artifact:** Build/test output jo store ya share kiya ja sakta hai.
- **Secret:** Sensitive value, jaise deployment token.
- **Environment:** Deployment target aur environment-specific protection.

Company-level CI mein tests, linting, type checking, build verification aur required status checks commonly use hote hain.

---

# PART 18: COMPANY-LEVEL GIT WORKFLOW

## 55. Example: Feature development

Task: Student dashboard mein search feature add karna.

```bash
git switch main
git fetch origin
git pull --ff-only
git switch -c feature/student-search
```

Implementation ke baad:

```bash
git status
git diff
npm run lint
npm run build
```

Project mein configured tests bhi run karo:

```bash
npm test
```

Agar `npm test` script defined nahi hai, toh project ka actual test command use karo.

Changes stage aur commit karo:

```bash
git add src/
git diff --staged
git commit -m "Add student search"
git push -u origin feature/student-search
```

Ab GitHub par PR open karo.

Review feedback aane par:

```bash
git add src/
git commit -m "Address student search review feedback"
git push
```

Agar repository squash merge use karti hai, toh merge ke baad local cleanup:

```bash
git switch main
git pull --ff-only
git branch -d feature/student-search
git fetch --prune
```

**Yeh sequence tabhi follow karo jab PR merge ho chuka ho aur local feature branch ka kaam complete ho.**

## 56. Hotfix workflow

Production bug ke liye:

```bash
git switch main
git pull --ff-only
git switch -c hotfix/login-failure
```

Fix, tests aur review ke baad PR open karo. Required approvals aur CI pass hone ke baad merge/deploy karo.

Agar release branch use hoti hai, toh fix ko supported release branch aur main branch dono mein integrate karna pad sakta hai. Company release policy follow karo.

---

# PART 19: COMMIT MESSAGE CONVENTION

## 57. Conventional Commits

Format:

```text
type(scope): short description
```

Examples:

```text
feat(auth): add email login
fix(api): handle empty student response
docs(readme): update setup instructions
refactor(ui): extract dashboard header
test(auth): add login validation tests
chore(deps): update React dependencies
perf(table): reduce unnecessary re-renders
```

Common types:

- `feat`: New feature.
- `fix`: Bug fix.
- `docs`: Documentation.
- `style`: Formatting changes without functional behavior changes, as defined by team convention.
- `refactor`: Code restructuring without intended behavior change.
- `test`: Tests add/update.
- `chore`: Maintenance tasks.
- `perf`: Performance improvements.
- `build`: Build system/dependencies.
- `ci`: CI configuration changes.

Conventional Commits ek convention hai, Git ki compulsory requirement nahi.

---

# PART 20: SECURITY AUR TEAM BEST PRACTICES

## 58. Secrets aur sensitive data

Kabhi bhi commit mat karo:

- Database passwords.
- Production API keys.
- Private SSH keys.
- Access tokens.
- `.env` secrets.
- Customer personal data.
- Production database dumps without authorization.

Agar secret leak ho gaya, toh use revoke/rotate karo. Sirf commit delete karna enough nahi, kyunki secret Git history mein reh sakta hai.

## 59. Pull Request checklist

PR open karne se pehle:

- [ ] Changes task ke scope mein hain.
- [ ] Unrelated files modify nahi hui.
- [ ] Tests pass hain.
- [ ] Lint/build pass hai.
- [ ] Secrets ya credentials commit nahi hue.
- [ ] Commit messages meaningful hain.
- [ ] UI changes ke screenshots, if useful, attach kiye hain.
- [ ] Reviewer ko context aur testing instructions di hain.

## 60. Company-level habits

1. `main` par direct push karne se bacho, jab tak team policy explicitly allow na kare.
2. Small, focused PRs banao.
3. Review ke bina sensitive production changes merge mat karo.
4. Shared history ko force push se rewrite mat karo.
5. `reset --hard`, `clean -fd` aur destructive commands se pehle state verify karo.
6. Dependencies aur lockfiles ko consistent rakho.
7. Automated checks ko required rakho, where appropriate.
8. Secrets ke liye approved secret manager ya GitHub Actions secrets use karo.
9. Conflict resolution ke baad tests run karo.
10. Repository instructions, contribution guidelines aur branch policies follow karo.

---

# PART 21: QUICK COMMAND CHEAT SHEET

| Kaam | Command |
|---|---|
| Git version | `git --version` |
| Repository initialize | `git init` |
| Clone | `git clone URL` |
| Status | `git status` |
| Stage file | `git add file` |
| Stage all changes | `git add -A` |
| Commit | `git commit -m "message"` |
| History | `git log --oneline` |
| Diff | `git diff` |
| Staged diff | `git diff --staged` |
| Branch list | `git branch` |
| New branch | `git switch -c branch-name` |
| Switch branch | `git switch branch-name` |
| Merge | `git merge branch-name` |
| Fetch | `git fetch origin` |
| Pull | `git pull` |
| Push | `git push` |
| Add remote | `git remote add origin URL` |
| Remote list | `git remote -v` |
| Undo published commit | `git revert HASH` |
| Stash | `git stash` |
| Restore unstaged file | `git restore file` |
| Unstage file | `git restore --staged file` |
| Recent references | `git reflog` |
| Specific commit | `git show HASH` |
| Delete merged branch | `git branch -d branch-name` |
| Remove stale remote refs | `git fetch --prune` |
| Create annotated tag | `git tag -a v1.0.0 -m "Release"` |

---

# PART 22: PRACTICE ROADMAP

## Level 1 — Beginner

- Git install/configure karo.
- Repository initialize karo.
- Files stage aur commit karo.
- `status`, `diff`, `log` samjho.
- GitHub par repository push karo.

## Level 2 — Intermediate

- Feature branches banao.
- Merge aur conflicts resolve karo.
- Remote fetch/pull/push samjho.
- `.gitignore` configure karo.
- Stash aur revert practice karo.

## Level 3 — Advanced

- Interactive rebase practice karo.
- Cherry-pick aur reflog se recovery karo.
- Tags/releases samjho.
- SSH authentication configure karo.
- GitHub CLI aur PR review workflow use karo.

## Level 4 — Company Ready

- Protected branches aur required checks configure karna samjho.
- PR-based collaboration practice karo.
- GitHub Actions mein CI workflow banao.
- Secrets aur permissions securely manage karo.
- Hotfix aur release workflow simulate karo.
- Merge conflicts, accidental resets aur failed pushes ko safely recover karna seekho.

**Final objective:** Tumhe commands ki list yaad hone ke saath repository ki state samajhni chahiye. Professional developer wahi hai jo changes ko safely track, review, collaborate aur recover kar sake.

