# 🖼️ INSTRUCȚIUNI - Cum să Adaugi Pozele pe Site

## ⚠️ IMPORTANT: Pozele VOR FI LIVE PE INTERNET!

Când pui pozele în folderul `public/team/`, ele **NU sunt locale**!
Vercel le va face disponibile live pe internet automat! 🌐

---

## 📋 Pași Simpli:

### 1️⃣ Descarcă pozele din Google Drive

Salvează pe desktop:
- Poza lui Florin → `florin.jpg`
- Poza lui Bogdan → `bogdan.jpg`  
- Poza lui Sergiu → `sergiu.jpg`

### 2️⃣ Copiază pozele în folder

Deschide:
```
C:\Users\sergi\source\repos\Flowmadeit\flowmadeit\public\team\
```

Copiază cele 3 fișiere acolo.

### 3️⃣ Commit și Push

Deschide Git Bash sau CMD în folderul:
```
C:\Users\sergi\source\repos\Flowmadeit\flowmadeit\
```

Apoi rulează:
```bash
git add public/team/
git add src/components/Team.jsx
git commit -m "Add team member photos"
git push origin master
```

### 4️⃣ Așteaptă ~1-2 minute

Vercel va rebuilda automat site-ul cu noile poze! ✅

---

## 🌐 Unde Vor Fi Disponibile Pozele?

După deploy pe Vercel:
- `https://flowmadeit.vercel.app/team/florin.jpg` ← LIVE pe internet!
- `https://flowmadeit.vercel.app/team/bogdan.jpg` ← LIVE pe internet!
- `https://flowmadeit.vercel.app/team/sergiu.jpg` ← LIVE pe internet!

**Site-ul tău le va încărca de pe serverele Vercel, nu de pe computerul tău!**

---

## ✅ De Ce Funcționează pe Vercel?

1. Folderul `public/` este special în Vite
2. Tot ce e în `public/` devine disponibil la `/ceva.jpg`
3. Vercel copiază automat folderul `public/` când face build
4. Imaginile tale vor fi servite de CDN-ul Vercel (rapid în toată lumea!)

---

## 📝 Notă despre Mărimea Pozelor:

Pentru performanță optimă:
- Dimensiune: 400x400px (pătrat) 
- Format: JPG (sau PNG dacă ai nevoie de transparență)
- Mărime fișier: < 300KB fiecare
- Poți folosi https://tinypng.com/ pentru a comprima pozele

---

## 🆘 Alternativă Rapidă: Imgur

Dacă vrei ceva FOARTE rapid (temporar):

1. Du-te pe https://imgur.com/
2. Upload pozele
3. Click dreapta pe poză → "Copy image address"
4. Pune link-ul în `Team.jsx`:
   ```javascript
   image: 'https://i.imgur.com/ABC123.jpg',
   ```

**Dar metoda cu `public/team/` este cea mai bună pentru long-term!**

---

## 🚀 Status Curent:

- ✅ Codul pentru local images este deja în `Team.jsx`
- ✅ Folderul `public/team/` există
- ⏳ Trebuie doar să adaugi cele 3 poze
- ⏳ Apoi commit + push

**După ce faci push, Vercel va rebuilda automat în ~1-2 minute!** 🎉
