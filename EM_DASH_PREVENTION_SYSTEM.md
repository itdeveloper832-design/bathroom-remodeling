# EM-DASH PREVENTION SYSTEM

## Current Status
✅ **Website Clean**: 0 em-dashes (—) found across all 118 pages  
✅ **Blog Posts Clean**: 0 em-dashes in any content files  
✅ **Prevention Active**: Git pre-commit hook installed and active  

---

## What This Prevents

### Em-Dashes (—)
Em-dashes are a common AI writing pattern that signals auto-generated content to:
- Google's algorithms
- Savvy users
- AI content detectors

**Pattern**: AI writers use em-dashes to add dramatic pauses  
**Impact**: Reduces click-through rates by 10-15%  
**Solution**: Use commas, periods, or complete new sentences

---

## How the Prevention System Works

### 1. Pre-Commit Git Hook
**Location**: `.git/hooks/pre-commit`  
**When it runs**: Before each git commit  
**What it checks**:
- ✓ Blocks commits if em-dashes found in content
- ⚠️ Warns about multiple pipe separators in titles
- ⚠️ Warns about AI-style phrases

**If em-dashes are detected:**
```
❌ ERROR: Em-dashes (—) found in the following files:
app/some-page/page.tsx
app/blog/post.tsx

Em-dashes mark content as AI-generated and reduce user trust.
Replace with hyphens (-) or commas (,) instead.
```

### 2. Allowed Override (Emergency Only)
If you absolutely must commit em-dash content:
```bash
git commit --no-verify
```

⚠️ **WARNING**: Only use this for legacy content imports. New content should always follow the guide.

---

## Content Style Examples

### Em-Dash vs. Proper Punctuation

#### ❌ BAD (AI Pattern)
```
"Understanding the project timeline—knowing when work starts and ends—
helps you prepare your family for the disruption. We handle everything—
permits, inspections, and cleanup—so you don't have to worry."
```

#### ✅ GOOD (Human Writing)
```
"Understanding the project timeline is key to preparing your family. 
We handle everything: permits, inspections, and cleanup. That means 
you don't have to worry about the details."
```

### Another Example

#### ❌ BAD (AI Pattern)
```
"A master bathroom remodel is more than just an upgrade—it's an investment 
in your home's value and your daily quality of life. We've completed 500+ 
projects—each one tailored to our client's specific needs."
```

#### ✅ GOOD (Human Writing)
```
"A master bathroom remodel is more than just an upgrade. It's an investment 
in your home's value and your daily quality of life. We've completed 500+ 
projects, each one tailored to our clients' specific needs."
```

---

## Implementation for New Content

### When Adding Blog Posts
1. Write your content naturally
2. Read it out loud to check flow
3. Replace any em-dashes with:
   - Periods (for complete thoughts)
   - Commas (for quick pauses)
   - Colons (for lists or explanations)
4. Run `git status` to see staged files
5. Commit - pre-hook will verify

### When Adding Pages
1. Create page content
2. Check meta title for pipes (|)
3. Verify H1 is present and singular
4. Ensure meta description is 150-160 chars
5. Commit and pre-hook validates

---

## Scanning for Violations

### Manual Scan (Find All)
```bash
grep -r "—" app lib components --include="*.tsx" --include="*.ts"
```

### Check Specific File
```bash
grep "—" app/specific-page/page.tsx
```

### Count Total
```bash
grep -r "—" app --include="*.tsx" --include="*.ts" | wc -l
```

---

## Quick Reference

| Issue | Solution | Command |
|-------|----------|---------|
| Em-dash in file | Replace with `-` or `,` | `sed -i 's/—/-/g' file.tsx` |
| Check for violations | Scan directory | `grep -r "—" app` |
| Override pre-commit | Force commit | `git commit --no-verify` |
| Verify hook working | Attempt bad commit | `git commit` (with em-dash) |

---

## Troubleshooting

### Pre-Commit Hook Not Running
**Symptom**: Can commit files with em-dashes  
**Solution**: 
```bash
# Make hook executable
chmod +x .git/hooks/pre-commit

# Verify it's executable
ls -la .git/hooks/pre-commit
```

### Hook Running But Not Catching Em-Dashes
**Symptom**: Hook runs but doesn't catch the character  
**Solution**: Check character encoding
```bash
# The em-dash must be the actual — character (U+2014)
# Not a double hyphen -- or minus sign -

# If you see this in editor, it's wrong:
echo "This — is an em-dash"  # ✓ Correct Unicode
echo "This -- is not an em-dash"  # ✗ Wrong (double hyphen)
```

### How to Override Pre-Commit (Emergency)
```bash
# Skip hook validation
git commit --no-verify

# Alternative: Temporarily disable hook
chmod -x .git/hooks/pre-commit
git commit
chmod +x .git/hooks/pre-commit
```

---

## Team Guidelines

### For Content Writers
- ✅ Always read content out loud
- ✅ Use natural punctuation
- ✅ Reference CONTENT_STYLE_GUIDE.md
- ✅ Test your commits locally first

### For Developers
- ✅ Keep pre-commit hook active
- ✅ Don't bypass hooks for content
- ✅ Report false positives
- ✅ Update hook if needed

### For Blog Contributors
- ✅ Write naturally, not for SEO
- ✅ Follow brand voice guidelines
- ✅ Limit content length (800-1200 words typical)
- ✅ Include 1 CTA per post

---

## Maintenance Schedule

**Weekly**: Random content spot check  
**Monthly**: Full website scan for violations  
**Quarterly**: Update CONTENT_STYLE_GUIDE.md based on findings  
**Annually**: Review and update prevention system  

---

## Prevention System Files

| File | Purpose |
|------|---------|
| `.git/hooks/pre-commit` | Git hook that prevents commits with em-dashes |
| `CONTENT_STYLE_GUIDE.md` | Detailed content writing guidelines |
| `EM_DASH_PREVENTION_SYSTEM.md` | This file - system documentation |

---

## Emergency Contact

If you need to add content that violates these rules:
1. Document why it's necessary
2. Get approval from project owner
3. Use `git commit --no-verify` only
4. Create ticket to fix it permanently

---

## Current Scan Results

**Latest Scan Date**: May 22, 2026  
**Total Pages**: 118  
**Em-Dashes Found**: 0  
**Status**: ✅ CLEAN  

**Breakdown:**
- App pages: 0 em-dashes
- Components: 0 em-dashes
- Blog posts: 0 em-dashes
- Utilities: 0 em-dashes

---

**This system is active and will remain in place to maintain content quality and user trust.**
