#!/bin/bash

# Create redirect pages for all Vellore locations (point to main /in/tamil-nadu/vellore/gandhi)
vellore_areas=(
  "gandhi-nagar" "gandhinagar" "kosapet" "saidapet" "thottapalayam" 
  "konavattam" "shenbakkam" "dharapadavedu" "ambur" "kosapettai" 
  "perumugai" "toll-gate" "r-n-palayam" "kagithapattrai" "perumal-nagar" 
  "viruthampet" "otteri" "melvisharam" "abdullapuram" "anaicut" "arcot"
)

for area in "${vellore_areas[@]}"; do
  cat > "app/in/tamil-nadu/vellore/$area/page.tsx" << 'INNER_EOF'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in AREA_NAME, Vellore | Indira Dental Clinic',
  description: 'Best dentist near AREA_NAME, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function AREA_NAMEPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
INNER_EOF
  # Replace AREA_NAME with actual area name (capitalize first letter)
  area_display=$(echo $area | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
  sed -i.bak "s/AREA_NAME/$area_display/g" "app/in/tamil-nadu/vellore/$area/page.tsx"
  rm "app/in/tamil-nadu/vellore/$area/page.tsx.bak" 2>/dev/null
  echo "✅ Created: /in/tamil-nadu/vellore/$area"
done

# Create arcot and mahabalipuram as TN cities
cat > "app/in/tamil-nadu/arcot/page.tsx" << 'ARCOT_EOF'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Arcot, Tamil Nadu | Indira Dental Clinic Vellore',
  description: 'Best dentist near Arcot. Visit Indira Dental Clinic in nearby Vellore (20 km). Dr. Rockson Samuel.',
}

export default function ArcotPage() {
  redirect('/in/tamil-nadu/vellore')
}
ARCOT_EOF

cat > "app/in/tamil-nadu/mahabalipuram/page.tsx" << 'MAHA_EOF'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Mahabalipuram, Tamil Nadu | Indira Dental Clinic',
  description: 'Dental services for Mahabalipuram patients. Visit Indira Dental Clinic.',
}

export default function MahabalipuramPage() {
  redirect('/in/tamil-nadu/chennai')
}
MAHA_EOF

# Create gallery page
cat > "app/gallery/page.tsx" << 'GALLERY_EOF'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Gallery | Before & After | Indira Dental Clinic Vellore',
  description: 'View our dental treatment gallery, before and after photos, clinic images.',
}

export default function GalleryPage() {
  redirect('/testimonials')
}
GALLERY_EOF

echo "✅ Created arcot, mahabalipuram, and gallery pages"
