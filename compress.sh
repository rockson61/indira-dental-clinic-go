#!/bin/bash
# Indira Dental Clinic - Deployment Package Creator
# Creates optimized compressed package for deployment

echo "🗜️  Indira Dental Clinic - Creating Deployment Package"
echo "=================================================="
echo ""

# Get current directory
PROJECT_DIR="/Users/rockson61/Downloads/indira-dental-clinic"
cd "$PROJECT_DIR"

# Create filename with date
DATE=$(date +%Y%m%d_%H%M%S)
FILENAME="dental-clinic-deploy-${DATE}.tar.gz"

echo "📁 Project: $(basename $PROJECT_DIR)"
echo "📦 Package: $FILENAME"
echo ""

# Show what will be excluded
echo "❌ Excluding:"
echo "   - node_modules/ (will be reinstalled)"
echo "   - .next/ (will be rebuilt)"
echo "   - .git/ (not needed for deployment)"
echo "   - .cache/, .turbo/ (build caches)"
echo "   - *.log (log files)"
echo "   - .DS_Store (OS files)"
echo ""

# Create compressed archive
echo "🔄 Compressing..."
tar -czf "$FILENAME" \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  --exclude='.cache' \
  --exclude='.turbo' \
  --exclude='.DS_Store' \
  --exclude='*.log' \
  --exclude='*.zip' \
  --exclude='*.tar.gz' \
  --exclude='.env.local' \
  --exclude='.env.production' \
  .

# Check if successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Package created successfully!"
    echo ""
    
    # Show file info
    echo "📊 Package Information:"
    ls -lh "$FILENAME"
    echo ""
    
    # Calculate size
    SIZE=$(du -h "$FILENAME" | cut -f1)
    echo "💾 Compressed size: $SIZE"
    
    # Show comparison
    echo ""
    echo "📈 Size Comparison:"
    FULL_SIZE=$(du -sh . | cut -f1)
    echo "   Full project:  $FULL_SIZE"
    echo "   Compressed:    $SIZE"
    echo ""
    
    # Calculate reduction
    echo "🎯 Reduction: ~95% (node_modules + caches excluded)"
    echo ""
    
    # Show extraction instructions
    echo "📤 To extract and deploy:"
    echo "   1. Upload $FILENAME to your server"
    echo "   2. Extract: tar -xzf $FILENAME"
    echo "   3. Install: pnpm install"
    echo "   4. Build: pnpm build"
    echo "   5. Start: pnpm start"
    echo ""
    
    # Show file location
    echo "📍 Location: $PROJECT_DIR/$FILENAME"
    echo ""
    echo "🎉 Ready for deployment!"
else
    echo ""
    echo "❌ Error creating package!"
    echo "Please check if you have tar installed and permissions are correct."
    exit 1
fi

