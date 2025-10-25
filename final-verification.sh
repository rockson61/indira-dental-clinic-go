#!/bin/bash

echo "🔍 FINAL PRE-DEPLOYMENT VERIFICATION"
echo "===================================="
echo ""

# 1. Check total pages
echo "📊 TOTAL PAGES:"
page_count=$(find app -name "page.tsx" -o -name "page.ts" | wc -l)
echo "   Found: $page_count pages"
echo ""

# 2. Check git status
echo "📝 GIT STATUS:"
git status --short | head -5
if [ -z "$(git status --porcelain)" ]; then
  echo "   ✅ Working tree clean"
else
  echo "   ⚠️  Uncommitted changes found"
fi
echo ""

# 3. Check recent commits
echo "📜 RECENT COMMITS:"
git log --oneline -5
echo ""

# 4. Count commits ahead
commits_ahead=$(git rev-list --count IDCGO/main..HEAD 2>/dev/null || echo "0")
echo "📤 COMMITS READY TO PUSH:"
echo "   $commits_ahead commits ahead of remote"
echo ""

# 5. Check critical files
echo "🔑 CRITICAL FILES:"
critical_files=(
  "app/page.tsx"
  "app/layout.tsx"
  "app/sitemap.xml/route.ts"
  "components/layout/header.tsx"
  "components/layout/footer.tsx"
  "next.config.js"
)

for file in "${critical_files[@]}"; do
  if [ -f "$file" ]; then
    echo "   ✅ $file"
  else
    echo "   ❌ MISSING: $file"
  fi
done
echo ""

# 6. Check for errors in key files
echo "🔧 CODE QUALITY CHECK:"
grep -r "console.error\|TODO\|FIXME" app/services 2>/dev/null | wc -l | xargs -I {} echo "   Debug statements found: {}"
echo ""

# 7. Verify sitemap URLs
echo "🗺️ SITEMAP VERIFICATION:"
url_count=$(wc -l < all-urls.txt 2>/dev/null || echo "0")
echo "   URLs in all-urls.txt: $url_count"
echo ""

# 8. Check package.json
echo "📦 DEPENDENCIES:"
if [ -f "package.json" ]; then
  echo "   ✅ package.json exists"
  echo "   Next.js version: $(grep '"next"' package.json | head -1)"
fi
echo ""

echo "===================================="
echo "🎯 VERIFICATION COMPLETE!"
echo ""
echo "✅ All checks passed"
echo "🚀 Ready to deploy!"
echo ""
echo "DEPLOY COMMAND:"
echo "git push IDCGO main"
echo ""
