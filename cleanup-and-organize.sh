#!/bin/bash
# Indira Dental Clinic - Project Cleanup and Organization Script
# Removes unwanted files and organizes project structure

echo "🧹 Indira Dental Clinic - Project Cleanup & Organization"
echo "=========================================================="
echo ""

PROJECT_DIR="/Users/rockson61/Downloads/indira-dental-clinic"
cd "$PROJECT_DIR"

echo "📍 Working directory: $PROJECT_DIR"
echo ""

# Create documentation folder if it doesn't exist
mkdir -p docs

echo "🗑️  Step 1: Removing Unwanted Files"
echo "-----------------------------------"

# Remove OS-specific files
echo "   Removing .DS_Store files..."
find . -name ".DS_Store" -delete 2>/dev/null
echo "   ✅ Removed .DS_Store files"

# Remove log files
echo "   Removing log files..."
find . -name "*.log" -delete 2>/dev/null
echo "   ✅ Removed log files"

# Remove backup files
echo "   Removing backup files..."
find . -name "*.bak" -delete 2>/dev/null
find . -name "*.backup" -delete 2>/dev/null
find . -name "*.tmp" -delete 2>/dev/null
echo "   ✅ Removed backup/temp files"

# Remove Thumbs.db (Windows)
echo "   Removing Thumbs.db files..."
find . -name "Thumbs.db" -delete 2>/dev/null
echo "   ✅ Removed Thumbs.db files"

# Remove old compressed files (keep only latest)
echo "   Cleaning old compressed files..."
rm -f dental-clinic-deploy-*.tar.gz dental-clinic-deploy-*.zip 2>/dev/null
echo "   ✅ Removed old compressed files"

echo ""
echo "📁 Step 2: Organizing Documentation"
echo "-----------------------------------"

# Move all .md files to docs folder (except README.md)
echo "   Moving documentation files to docs/..."
for file in *.md; do
    if [ "$file" != "README.md" ] && [ -f "$file" ]; then
        mv "$file" "docs/" 2>/dev/null
        echo "   Moved: $file → docs/"
    fi
done
echo "   ✅ Documentation organized"

echo ""
echo "📊 Step 3: Project Structure Analysis"
echo "-----------------------------------"

# Count files in main directories
echo "   Analyzing project structure..."
echo ""
echo "   📦 Main Directories:"
[ -d "app" ] && echo "      app/            $(find app -type f | wc -l | tr -d ' ') files"
[ -d "components" ] && echo "      components/     $(find components -type f | wc -l | tr -d ' ') files"
[ -d "lib" ] && echo "      lib/            $(find lib -type f | wc -l | tr -d ' ') files"
[ -d "public" ] && echo "      public/         $(find public -type f | wc -l | tr -d ' ') files"
[ -d "hooks" ] && echo "      hooks/          $(find hooks -type f | wc -l | tr -d ' ') files"
[ -d "utils" ] && echo "      utils/          $(find utils -type f | wc -l | tr -d ' ') files"
[ -d "docs" ] && echo "      docs/           $(find docs -type f | wc -l | tr -d ' ') files"

echo ""
echo "   📄 Configuration Files:"
[ -f "package.json" ] && echo "      ✅ package.json"
[ -f "next.config.js" ] && echo "      ✅ next.config.js"
[ -f "tsconfig.json" ] && echo "      ✅ tsconfig.json"
[ -f "tailwind.config.js" ] && echo "      ✅ tailwind.config.js"
[ -f "vercel.json" ] && echo "      ✅ vercel.json"
[ -f ".gitignore" ] && echo "      ✅ .gitignore"

echo ""
echo "   📚 Documentation:"
[ -f "README.md" ] && echo "      ✅ README.md"
[ -f "docs/DEPLOYMENT_GUIDE.md" ] && echo "      ✅ DEPLOYMENT_GUIDE.md"
[ -f "docs/HOSTING_SETUP.md" ] && echo "      ✅ HOSTING_SETUP.md"
[ -f "docs/COMPRESSION_GUIDE.md" ] && echo "      ✅ COMPRESSION_GUIDE.md"

echo ""
echo "🔍 Step 4: Checking for Issues"
echo "-----------------------------------"

# Check for duplicate files
echo "   Checking for potential issues..."

# Check for node_modules
if [ -d "node_modules" ]; then
    NODE_SIZE=$(du -sh node_modules 2>/dev/null | cut -f1)
    echo "   ⚠️  node_modules exists ($NODE_SIZE)"
    echo "      Tip: Can be removed before compression"
fi

# Check for .next
if [ -d ".next" ]; then
    NEXT_SIZE=$(du -sh .next 2>/dev/null | cut -f1)
    echo "   ⚠️  .next build folder exists ($NEXT_SIZE)"
    echo "      Tip: Can be removed before compression"
fi

# Check for large files
echo ""
echo "   📊 Large files (>5MB):"
find . -type f -size +5M -not -path "*/node_modules/*" -not -path "*/.next/*" -not -path "*/.git/*" 2>/dev/null | while read file; do
    size=$(du -h "$file" | cut -f1)
    echo "      $size - ${file#./}"
done

echo ""
echo "✅ Step 5: Optimization Complete"
echo "-----------------------------------"
echo ""
echo "📊 Summary:"
echo "   ✅ Removed OS files (.DS_Store, Thumbs.db)"
echo "   ✅ Removed log files"
echo "   ✅ Removed backup files"
echo "   ✅ Organized documentation to docs/"
echo "   ✅ Project structure analyzed"
echo ""

# Calculate sizes
TOTAL_SIZE=$(du -sh . 2>/dev/null | cut -f1)
echo "   Total project size: $TOTAL_SIZE"

if [ -d "node_modules" ]; then
    SOURCE_SIZE=$(du -sh --exclude=node_modules --exclude=.next --exclude=.git . 2>/dev/null | cut -f1)
    echo "   Source code size:   $SOURCE_SIZE (without node_modules/.next)"
fi

echo ""
echo "🎯 Next Steps:"
echo "   1. Review docs/ folder for all documentation"
echo "   2. Run ./compress.sh to create deployment package"
echo "   3. Review PROJECT_STRUCTURE.md for organization"
echo ""
echo "✨ Cleanup complete!"

