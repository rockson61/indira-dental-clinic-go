#!/bin/bash

# Check critical service pages
services=(
  "/services/general-dentistry/check-ups"
  "/services/general-dentistry/teeth-cleaning"
  "/services/general-dentistry/fillings"
  "/services/general-dentistry/emergency-care"
  "/services/general-dentistry/dental-check-ups"
  "/services/general-dentistry/extractions"
  "/services/cosmetic-dentistry/gum-contouring"
  "/services/restorative-dentistry/crowns"
  "/services/periodontics/gingival-grafting"
  "/services/invisalign"
  "/services/teeth-whitening"
  "/services/dental-crowns"
  "/services/dental-bridges"
  "/services/dental-fillings"
  "/services/dentures"
)

missing=0
for url in "${services[@]}"; do
  path="app${url}/page.tsx"
  if [ -f "$path" ]; then
    echo "✅ $url"
  else
    echo "❌ MISSING: $url"
    missing=$((missing + 1))
  fi
done

echo "---"
echo "Missing service pages: $missing"
