# MERAKI — Design System

Référence pour créer de nouvelles pages cohérentes avec le site existant.

---

## Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Bleu profond | `#0c557e` | Couleur principale, CTAs, accents |
| Bleu nuit | `#083d5b` | Fond dégradé (fin de page) |
| Or sable | `#cfbb99` | Accents dorés, badges, bullets, icônes |
| Crème | `#e9dcc8` | Corps de texte sur fond sombre |
| Crème transparent 60% | `rgba(233,220,200,0.6)` | Texte secondaire, sous-titres |
| Blanc | `#ffffff` | Titres principaux, éléments forts |

**Fond de page :**
```css
background: linear-gradient(180deg, #0c557e 0%, #083d5b 100%);
```

**Cartes (fond clair) :**
```css
background: rgba(255,255,255,0.05) /* ou 0.06, 0.08 selon le niveau */
border: 1px solid rgba(255,255,255,0.10)
box-shadow: 0 8px 24px rgba(0,0,0,0.12)
```

**Carte prix (fond blanc) :**
```css
background: linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(232,220,199,0.97) 100%);
color: #111;
```

---

## Typographie

| Famille | Usage | Import |
|---------|-------|--------|
| **Playfair Display** | Titres (h1, h2, h3), chiffres prix | Google Fonts — `ital,wght@0,400;0,500;0,600;1,400;1,500` |
| **Inter** | Corps de texte, nav, boutons, labels | Google Fonts — `wght@300;400;500;600` |

**Tailles courantes :**
- Hero h1 : `clamp(2.8rem, 6vw, 5rem)` — Playfair, weight 500
- Section h2 : `text-3xl md:text-4xl` — Playfair
- Card h3 : `text-base` ou `text-xl` — Playfair
- Corps texte : `text-sm font-light leading-relaxed` — Inter
- Labels uppercase : `text-xs uppercase tracking-widest font-semibold` — Inter

---

## Espacements

- Section gap : `gap-16` dans le flux principal
- Padding page : `px-6 md:px-10`
- Section header → contenu : `mb-8`
- Card padding : `p-6` (standard) ou `p-8` / `p-10` (grand)

---

## Composants récurrents

### Label de section
```html
<span class="text-xs uppercase tracking-widest font-semibold block mb-2" style="color: #cfbb99;">
  Nom de section
</span>
```

### Carte standard
```html
<div class="rounded-2xl p-6 border border-white/10"
     style="background: rgba(255,255,255,0.05); box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
  ...
</div>
```

### Bouton CTA principal (or sable)
```html
<a class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-medium tracking-wide uppercase transition-all hover:opacity-90"
   style="background: #cfbb99; color: #111; box-shadow: 0 10px 24px rgba(0,0,0,0.18);">
  Texte du bouton
</a>
```

### Bouton CTA principal (bleu)
```html
<a class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-medium tracking-wide uppercase transition-all hover:opacity-90"
   style="background: #0c557e; color: #fff; box-shadow: 0 10px 24px rgba(0,0,0,0.18);">
  Texte du bouton
</a>
```

### Bouton secondaire (outline)
```html
<a class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-medium tracking-wide uppercase border transition-all border-white/20 text-white hover:bg-white/5">
  Texte
</a>
```

### Bullet list
```html
<li class="flex gap-2">
  <span style="color: #cfbb99;">·</span>
  Texte de l'item
</li>
```

### Divider ornemental
```html
<div class="flex items-center gap-4">
  <div class="h-px flex-1" style="background: rgba(255,255,255,0.1);"></div>
  <span class="italic text-lg" style="font-family: 'Playfair Display', serif; color: rgba(233,220,200,0.4);">
    Texte central
  </span>
  <div class="h-px flex-1" style="background: rgba(255,255,255,0.1);"></div>
</div>
```

---

## Icônes

Bibliothèque : **Iconify** (Solar linear + MDI)

- Calendrier : `solar:calendar-linear`
- Check : `solar:check-circle-linear`
- Croix : `solar:close-circle-linear`
- Flèche droite : `solar:arrow-right-linear`
- Flèche extérieure : `solar:arrow-right-up-linear`
- FAQ chevron : `solar:alt-arrow-down-linear`
- Instagram : `mdi:instagram`
- Soleil : `solar:sun-2-linear`

```html
<iconify-icon icon="solar:calendar-linear" width="18" style="color: #cfbb99;" stroke-width="1.5"></iconify-icon>
```

---

## Données à mettre à jour

Pour modifier les dates ou le prix sans toucher au HTML :

- **Dates & lieux** : `src/data/sessions.js`
- **Prix** : `src/data/sessions.js` → constante `prix`
- **Témoignages** : `src/data/temoignages.js`
- **Lien Billetweb** : `src/data/sessions.js` → constante `billetwebUrl`

---

## Déploiement

**Build local :** `npm run build` → génère `dist/`

**Cloudflare Pages :**
- Build command : `npm run build`
- Output directory : `dist`
- Node version : 18+
