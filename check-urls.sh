#!/bin/bash
# Check which pages exist

urls=(
  "/about-us"
  "/contact"
  "/services"
  "/pricing"
  "/testimonials"
  "/blog"
  "/faq"
  "/dentist-near-me"
  "/dentist-near-me/locations"
  "/gallery"
  "/services/general-dentistry/extractions"
  "/in/tamil-nadu/vellore/gandhi-nagar"
  "/in/tamil-nadu/vellore/gandhinagar"
  "/in/tamil-nadu/vellore/arcot"
  "/in/tamil-nadu/arcot"
  "/in/tamil-nadu/mahabalipuram"
)

for url in "${urls[@]}"; do
  path="app${url}/page.tsx"
  if [ -f "$path" ]; then
    echo "✅ EXISTS: $url"
  else
    echo "❌ MISSING: $url (would be: $path)"
  fi
done
