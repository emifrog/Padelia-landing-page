# Plan d'Action — Landing Page Padelia

> Corrections et ameliorations pour aligner la landing page (padelia.netlify.app) avec l'application reelle (padelia-beta.vercel.app).

---

## Sommaire

- [P0 — Corrections urgentes](#p0--corrections-urgentes)
- [P1 — Contenu a mettre a jour](#p1--contenu-a-mettre-a-jour)
- [P2 — Fonctionnalites manquantes a valoriser](#p2--fonctionnalites-manquantes-a-valoriser)
- [P3 — Ameliorations landing](#p3--ameliorations-landing)

---

## P0 — Corrections urgentes

> Incoherences factuelles entre la landing et l'app. A corriger avant tout partage public.

### 1. Copyright 2025 → 2026

Le footer affiche "© 2025 Padelia" — nous sommes en 2026.

### 2. Retirer les stats "0+"

La section affiche "0+ Joueurs inscrits", "0+ Matchs organises", "0% Satisfaction". Deux options :
- **Option A** : Masquer la section tant qu'il n'y a pas de vrais chiffres
- **Option B** : Remplacer par des metriques qualitatives ("Beta privee", "20+ badges a debloquer", "195 tests automatises")

### 3. Retirer "Reduction etudiants -50%"

Cette reduction n'est pas implementee dans l'app (pas de coupon Stripe). Soit l'implementer, soit la retirer pour eviter une promesse non tenue.

### 4. Retirer "Support prioritaire" du plan Premium

Non implemente dans l'app. Remplacer par une fonctionnalite reelle comme "Classements locaux & nationaux" ou "20 badges exclusifs".

### 5. Temoignages fictifs

Les 3 temoignages (Lucas M., Sophie B., Marc D.) semblent inventes. C'est risque juridiquement en France (pratique commerciale trompeuse). Deux options :
- **Option A** : Les retirer jusqu'a avoir de vrais retours beta-testeurs
- **Option B** : Les marquer clairement comme exemples fictifs (deconseille)

**Effort : 30 minutes**

---

## P1 — Contenu a mettre a jour

> Aligner le contenu existant avec l'etat reel de l'app.

### 6. Liens legaux du footer

Les liens "CGU", "Confidentialite", "Cookies", "Contact" du footer doivent pointer vers les vraies pages de l'app :
- CGU → `https://padelia-beta.vercel.app/cgu`
- Confidentialite → `https://padelia-beta.vercel.app/confidentialite`
- Mentions legales → `https://padelia-beta.vercel.app/mentions-legales`

### 7. Liens footer casses

Verifier et corriger ou retirer les liens qui pointent vers des pages inexistantes :
- Blog → retirer ou pointer vers un futur blog
- Discord → retirer si pas de serveur Discord
- Ambassadeurs → retirer si pas de programme
- Roadmap → retirer ou pointer vers le GitHub

### 8. Section "Chat temps reel" — enrichir

Le texte actuel est generique. L'app offre bien plus :

**Avant** : "Discute en direct avec tes partenaires, tes groupes et les participants de tes matchs. Notifications push incluses"

**Apres** : "Discute en direct avec tes partenaires et tes groupes. Partage des images, reagis avec des emojis, vois qui est en train d'ecrire. Notifications push incluses."

### 9. Section "Stats detaillees" — enrichir

**Avant** : "Suis ta progression Elo, ton win rate, tes meilleurs partenaires et ton evolution mois après mois"

**Apres** : "Suis ta progression Elo, ton win rate, tes series de victoires et tes meilleurs partenaires. Classement mensuel automatique et historique complet de tes matchs."

### 10. Plan Premium — fonctionnalites reelles

Mettre a jour la liste pour refleter ce qui est vraiment implemente :
- ~~Support prioritaire~~ → **Notifications intelligentes** (suggestions de joueurs compatibles)
- Ajouter : **Resume hebdomadaire par email**
- Ajouter : **20 badges a debloquer**

**Effort : 1 heure**

---

## P2 — Fonctionnalites manquantes a valoriser

> L'app a des features differenciantes que la landing ne mentionne pas du tout.

### 11. Ajouter une section "Gamification"

C'est un vrai differenciateur par rapport aux concurrents. Creer une 7eme card dans la section fonctionnalites :

```
Icone : 🏆
Titre : Badges & Progression
Texte : Debloque 20 badges en jouant : premier match, series de victoires,
        champion de tournoi... Suis ta progression et compare-toi dans le
        classement mensuel.
```

### 12. Ajouter "Notifications intelligentes" comme feature

```
Icone : 🔔
Titre : Notifications intelligentes
Texte : Recois des suggestions de joueurs compatibles disponibles ce soir.
        Resume hebdomadaire de tes stats par email. Rappels automatiques
        avant tes matchs.
```

### 13. Ajouter "Groupes & Communautes" comme feature

La landing ne mentionne pas les groupes alors que c'est une feature complete :

```
Icone : 👥
Titre : Groupes & Communautes
Texte : Cree ou rejoins des groupes de joueurs. Organise des matchs de groupe,
        discute dans le chat de groupe et retrouve ta communaute locale.
```

### 14. Mentionner la securite / RGPD

Ajouter un bandeau de confiance ou une section courte :

```
🔒 Donnees securisees — Chiffrement TLS, Row-Level Security,
   conforme RGPD. Tu peux exporter ou supprimer tes donnees a tout moment.
```

**Effort : 2 heures**

---

## P3 — Ameliorations landing

> Ameliorations optionnelles pour augmenter la conversion.

### 15. Screenshots reels de l'app

Remplacer le mockup unique par 3-4 screenshots reels :
- Page accueil (feed avec matchs a venir)
- Page match detail (scores, joueurs)
- Chat (bulles, reactions, images)
- Page badges (progression, categories)

Utiliser des outils comme [shots.so](https://shots.so) ou [screely.com](https://screely.com) pour des mockups propres avec cadre device.

### 16. Ajouter une section FAQ

Questions suggerees :
- "C'est quoi le matching intelligent ?"
- "Padelia est-il gratuit ?"
- "Comment fonctionne le systeme Elo ?"
- "Puis-je organiser des tournois ?"
- "Mes donnees sont-elles en securite ?"
- "Comment supprimer mon compte ?"
- "Padelia fonctionne-t-il hors connexion ?"

### 17. Video demo ou GIF anime

Une video de 30-60 secondes montrant le parcours : inscription → matching → creation match → chat → badge obtenu. Meme un GIF anime du flow serait mieux que rien.

### 18. Bandeau "Beta ouverte"

Ajouter un bandeau en haut de la page :

```
🎾 Beta ouverte — Inscris-toi gratuitement et aide-nous a ameliorer Padelia !
```

Ca justifie les stats a 0 et donne un sentiment d'exclusivite.

### 19. Section "Securite & Confiance" dans le footer

```
- Heberge en Europe (Supabase EU)
- Paiements securises Stripe
- Conforme RGPD
- Code open-source [si applicable]
- 195 tests automatises
```

### 20. Open Graph meta tags

Pour le partage social (WhatsApp, Twitter, Facebook) :
```html
<meta property="og:title" content="Padelia — Trouve ton partenaire de padel ideal" />
<meta property="og:description" content="Matching intelligent, matchs, chat, tournois, stats. Gratuit." />
<meta property="og:image" content="https://padelia.netlify.app/og-image.png" />
<meta property="og:url" content="https://padelia.netlify.app" />
<meta name="twitter:card" content="summary_large_image" />
```

Creer une image OG de 1200x630px avec le logo + le tagline + un screenshot.

**Effort : 3-4 heures**

---

## Recapitulatif

| Priorite | Taches | Effort | Impact |
|----------|--------|--------|--------|
| **P0** | Copyright, stats 0+, reduction etudiants, temoignages | 30 min | Credibilite |
| **P1** | Liens legaux, footer, descriptions enrichies, pricing | 1h | Coherence |
| **P2** | Gamification, notifs, groupes, RGPD | 2h | Differenciation |
| **P3** | Screenshots, FAQ, video, beta bandeau, OG tags | 3-4h | Conversion |
| **Total** | | **~7h** | |

---

## Checklist finale avant publication

- [ ] Copyright 2026
- [ ] Stats retirees ou remplacees
- [ ] Reduction etudiants retiree
- [ ] Temoignages retires ou vrais
- [ ] Liens legaux fonctionnels
- [ ] Liens footer casses retires
- [ ] Descriptions fonctionnalites a jour
- [ ] Plan Premium a jour
- [ ] Gamification ajoutee
- [ ] OG meta tags configures
- [ ] Teste sur mobile (responsive)
- [ ] Teste les CTAs (pointent vers la bonne URL)
